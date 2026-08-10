"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

const projects = [
  { name: "RetailOS", color: "#C18A42", screenColor: "#2A1F0F" },
  { name: "SpendWise", color: "#5C8765", screenColor: "#0F1A11" },
  { name: "PlayMate", color: "#D79E56", screenColor: "#2A1F0F" },
  { name: "Student Companion", color: "#8A7B63", screenColor: "#1A1710" },
  { name: "School Management", color: "#C88E2D", screenColor: "#2A1F0F" },
];

function PhoneModel() {
  const meshRef = useRef<THREE.Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [projectIndex, setProjectIndex] = useState(0);

  // Cycle through projects every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setProjectIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Subtle mouse tracking (max 5 degrees = ~0.087 radians)
    const maxRotation = 0.087;
    const targetX = mouseRef.current.x * maxRotation;
    const targetY = mouseRef.current.y * maxRotation * 0.5;

    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetX + Math.sin(state.clock.elapsedTime * 0.3) * 0.02,
      0.04
    );
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetY + Math.cos(state.clock.elapsedTime * 0.2) * 0.015,
      0.04
    );
  });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const project = projects[projectIndex];

  return (
    <group ref={meshRef}>
      {/* Phone Body */}
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.4}>
        <RoundedBox args={[2.4, 4.8, 0.2]} radius={0.3} smoothness={4}>
          <meshBasicMaterial
            color={project.color}
            wireframe
            transparent
            opacity={0.2}
          />
        </RoundedBox>

        {/* Screen */}
        <RoundedBox
          args={[2.1, 4.3, 0.05]}
          radius={0.2}
          smoothness={4}
          position={[0, 0, 0.1]}
        >
          <meshBasicMaterial
            color={project.screenColor}
            transparent
            opacity={0.7}
          />
        </RoundedBox>

        {/* Screen Content — Abstract app UI lines */}
        {/* Header bar */}
        <mesh position={[0, 1.6, 0.14]}>
          <planeGeometry args={[1.6, 0.15]} />
          <meshBasicMaterial
            color={project.color}
            transparent
            opacity={0.12}
          />
        </mesh>

        {/* Content blocks */}
        {[0.8, 0.2, -0.4, -1.0].map((y, i) => (
          <mesh key={i} position={[-0.2, y, 0.14]}>
            <planeGeometry args={[1.0 - i * 0.1, 0.1]} />
            <meshBasicMaterial
              color={project.color}
              transparent
              opacity={0.06 + i * 0.02}
            />
          </mesh>
        ))}

        {/* Action button */}
        <mesh position={[0, -1.5, 0.14]}>
          <planeGeometry args={[1.2, 0.2]} />
          <meshBasicMaterial
            color={project.color}
            transparent
            opacity={0.15}
          />
        </mesh>
      </Float>

      {/* Floating UI elements */}
      <Float speed={1.8} rotationIntensity={0.15} floatIntensity={0.6}>
        <group position={[2.2, 1.2, -0.3]} rotation={[0, -0.15, 0.05]}>
          <RoundedBox args={[1.6, 1, 0.04]} radius={0.12} smoothness={4}>
            <meshBasicMaterial
              color={project.color}
              wireframe
              transparent
              opacity={0.1}
            />
          </RoundedBox>
        </group>
      </Float>

      <Float speed={1.5} rotationIntensity={0.12} floatIntensity={0.5}>
        <group position={[-1.8, -1.3, 0.3]} rotation={[0, 0.1, -0.05]}>
          <RoundedBox args={[1.3, 0.8, 0.04]} radius={0.1} smoothness={4}>
            <meshBasicMaterial
              color={project.color}
              wireframe
              transparent
              opacity={0.08}
            />
          </RoundedBox>
        </group>
      </Float>

      {/* Subtle dots */}
      <Float speed={2.5} rotationIntensity={0} floatIntensity={0.8}>
        <mesh position={[-2.2, 1.8, 0.8]}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshBasicMaterial color={project.color} transparent opacity={0.3} />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={0} floatIntensity={0.7}>
        <mesh position={[2.8, -0.8, 0.4]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color={project.color} transparent opacity={0.25} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero3DScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "low-power",
      }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <PhoneModel />
    </Canvas>
  );
}
