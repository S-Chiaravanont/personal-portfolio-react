import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Suspense, useRef } from "react";
import { Html, useProgress } from '@react-three/drei'

function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
}

const Model = () => {
    const myModel = useRef<any>(null!);
    const gltf = useLoader(GLTFLoader, "/scene.gltf");

    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        myModel.current.rotation.y = a;
    })

    return (
        <primitive ref={myModel} object={gltf.scene} scale={3} />
    );
};

export default function Computer3d() {
    return (
        <Canvas
            camera={{ fov: 75, near: 0.1, far: 10, position: [-2, 1, -3] }}
        >
            <Suspense fallback={<Loader />}>
                <Model />
                <ambientLight intensity={0.5} />
                <Environment preset="sunset" />
            </Suspense>
        </Canvas>
    );
}
