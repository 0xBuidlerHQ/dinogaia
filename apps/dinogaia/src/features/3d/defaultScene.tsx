import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Mesh } from "three";

const RotatingBox = () => {
	const meshRef = useRef<Mesh>(null);
	const color = useMemo(() => "#4ade80", []);

	useFrame((state, delta) => {
		if (!meshRef.current) {
			return;
		}
		meshRef.current.rotation.x += delta * 0.4;
		meshRef.current.rotation.y += delta * 0.6;
		meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.25;
	});

	return (
		<mesh ref={meshRef} position={[0, 0, 0]}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={color} metalness={0.2} roughness={0.3} />
		</mesh>
	);
};

const GroundPlane = () => (
	<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.8, 0]}>
		<planeGeometry args={[10, 10]} />
		<shadowMaterial opacity={0.3} />
	</mesh>
);

const DefaultScene = () => (
	<Canvas shadows camera={{ position: [2.25, 2.25, 4], fov: 50 }}>
		<ambientLight intensity={0.5} />
		<directionalLight
			castShadow
			position={[3, 5, 2]}
			intensity={1}
			shadow-mapSize={[1024, 1024]}
			shadow-camera-far={10}
			shadow-camera-left={-2}
			shadow-camera-right={2}
			shadow-camera-bottom={-2}
			shadow-camera-top={2}
		/>
		<RotatingBox />
		<GroundPlane />
		<OrbitControls makeDefault enablePan enableZoom={false} enableRotate />
	</Canvas>
);

export { DefaultScene };
