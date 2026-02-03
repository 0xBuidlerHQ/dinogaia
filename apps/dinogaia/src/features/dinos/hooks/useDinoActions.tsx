"use client";

import {
	type dinoAccountAbi,
	emeraldErc20Abi,
	useWriteDinoAccountExecuteBatch,
} from "@0xbuidlerhq/dinogaia.contracts";
import { type AbiParameterToPrimitiveType, type Address, encodeFunctionData } from "viem";

type Props = {
	dinoAccount: Address;
};

type ExecuteInput = (typeof dinoAccountAbi)[number] extends infer F
	? F extends { name: "execute"; inputs: readonly [infer I] }
		? I
		: never
	: never;

type Call = AbiParameterToPrimitiveType<ExecuteInput>;

const transferEmeraldData = (args: [Address, bigint]) =>
	encodeFunctionData({
		abi: emeraldErc20Abi,
		functionName: "transfer",
		args,
	});

const useDinoActions = (props: Props) => {
	const { dinoAccount } = props;

	const { writeContractAsync: executeBatch } = useWriteDinoAccountExecuteBatch({});

	const sendTxsFromDinoAccount = async (calls: Call[]) => {
		await executeBatch({
			address: dinoAccount,
			args: [calls],
		});
	};

	return { sendTxsFromDinoAccount };
};

export { useDinoActions, transferEmeraldData };
