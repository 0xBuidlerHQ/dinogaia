import { ChildProcessWithoutNullStreams, spawn, SpawnOptionsWithoutStdio } from "child_process";
import path from "path";
import process from "process";

const ROOT_DIR = path.resolve(__dirname);

async function runCommand(command: string, args: string[], options?: SpawnOptionsWithoutStdio) {
    console.log(`> ${command} ${args.join(" ")}`);
    return new Promise<void>((resolve, reject) => {
        const child = spawn(command, args, {
            stdio: "inherit",
            cwd: ROOT_DIR,
            ...options
        });

        child.on("error", (error) => reject(error));
        child.on("close", (code, signal) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`Command ${command} ${args.join(" ")} exited with ${signal ?? code}`));
            }
        });
    });
}

function pipeStreams(proc: ChildProcessWithoutNullStreams) {
    proc.stdout.on("data", (chunk) => process.stdout.write(chunk));
    proc.stderr.on("data", (chunk) => process.stderr.write(chunk));
}

function waitForChainReady(proc: ChildProcessWithoutNullStreams) {
    const READY_PATTERNS = [/http:\/\/127\.0\.0\.1/i, /listening/i, /http:\/\//i];
    return new Promise<void>((resolve, reject) => {
        const timeout = setTimeout(() => {
            removeListeners();
            reject(new Error("Timed out waiting for dev:chain to be ready"));
        }, 30_000);

        function check(chunk: Buffer) {
            const text = chunk.toString("utf8");
            for (const pattern of READY_PATTERNS) {
                if (pattern.test(text)) {
                    removeListeners();
                    clearTimeout(timeout);
                    resolve();
                    return;
                }
            }
        }

        function onExit(code: number | null, signal: NodeJS.Signals | null) {
            removeListeners();
            clearTimeout(timeout);
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`dev:chain exited before becoming ready (${signal ?? code})`));
            }
        }

        function removeListeners() {
            proc.stdout.off("data", check);
            proc.stderr.off("data", check);
            proc.off("exit", onExit as never);
        }

        proc.stdout.on("data", check);
        proc.stderr.on("data", check);
        proc.on("exit", onExit as never);
    });
}

function killProcess(proc: ChildProcessWithoutNullStreams) {
    return new Promise<void>((resolve) => {
        if (proc.exitCode !== null) {
            resolve();
            return;
        }

        const cleanup = () => {
            proc.off("exit", onExit as never);
            resolve();
        };

        const onExit = () => cleanup();

        proc.on("exit", onExit as never);
        proc.kill("SIGINT");

        setTimeout(() => {
            if (proc.exitCode === null) {
                proc.kill("SIGTERM");
            }
        }, 5_000);
    });
}

async function main() {
    process.chdir(ROOT_DIR);
    await runCommand("pnpm", ["build:contract"]);

    const chainProcess = spawn("pnpm", ["dev:chain"], {
        cwd: ROOT_DIR,
        stdio: ["ignore", "pipe", "pipe"],
    });

    pipeStreams(chainProcess);

    try {
        await waitForChainReady(chainProcess);
        await runCommand("pnpm", ["dev:deploy"]);
        await runCommand("pnpm", ["dev:snapshot"]);
    } finally {
        await killProcess(chainProcess);
    }

    await runCommand("pnpm", ["build:wagmi"]);
    await runCommand("pnpm", ["build:types"]);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
