"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { StudioProjectItem } from "./types";

interface ProjectPlinthsProps {
  projects: StudioProjectItem[];
  onSelectProject?: (slug: string) => void;
}

export function ProjectPlinths({ projects, onSelectProject }: ProjectPlinthsProps) {
  return (
    <group position={[0, 0, -11]}>
      {projects.map((project, idx) => {
        // Arrange projects in an alternating gallery path along Z axis
        const xOffset = (idx % 2 === 0 ? -1 : 1) * 2.2;
        const zOffset = -(idx * 2.6);
        const yOffset = 0.9;

        return (
          <ProjectScreen
            key={project.slug}
            project={project}
            position={[xOffset, yOffset, zOffset]}
            rotation={[0, idx % 2 === 0 ? 0.15 : -0.15, 0]}
            onSelect={() => onSelectProject?.(project.slug)}
          />
        );
      })}
    </group>
  );
}

function ProjectScreen({
  project,
  position,
  rotation,
  onSelect,
}: {
  project: StudioProjectItem;
  position: [number, number, number];
  rotation: [number, number, number];
  onSelect: () => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const targetScale = useRef(1);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Gentle floating motion
    const floatY = Math.sin(state.clock.elapsedTime * 1.2 + position[0]) * 0.04;
    groupRef.current.position.y = position[1] + floatY;

    // Hover scale & slight rotation reaction
    targetScale.current = hovered ? 1.04 : 1.0;
    const lerpSpeed = Math.min(delta * 6, 0.2);
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale.current, targetScale.current, targetScale.current),
      lerpSpeed
    );

    if (hovered) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        rotation[1] + 0.08,
        lerpSpeed
      );
    } else {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        rotation[1],
        lerpSpeed
      );
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={rotation}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
    >
      {/* Plinth Base / Pedestal */}
      <mesh position={[0, -0.7, 0]}>
        <cylinderGeometry args={[0.55, 0.65, 0.4, 16]} />
        <meshStandardMaterial
          color="#16171A"
          roughness={0.7}
          metalness={0.2}
        />
      </mesh>

      {/* Outer Sleek Device Frame */}
      <RoundedBox args={[2.2, 1.4, 0.08]} radius={0.06} smoothness={4}>
        <meshStandardMaterial
          color="#1A1B1F"
          roughness={0.4}
          metalness={0.8}
        />
      </RoundedBox>

      {/* Screen Face */}
      <RoundedBox
        args={[2.08, 1.28, 0.02]}
        radius={0.04}
        smoothness={4}
        position={[0, 0, 0.045]}
      >
        <meshStandardMaterial
          color="#0D0E11"
          roughness={0.2}
          metalness={0.1}
        />
      </RoundedBox>

      {/* Screen Glow Rim */}
      <mesh position={[0, 0, 0.046]}>
        <planeGeometry args={[2.0, 1.2]} />
        <meshBasicMaterial
          color={project.accent}
          wireframe
          transparent
          opacity={hovered ? 0.25 : 0.12}
        />
      </mesh>

      {/* Abstract App Wireframe Lines */}
      {/* App Bar */}
      <mesh position={[0, 0.42, 0.05]}>
        <planeGeometry args={[1.7, 0.1]} />
        <meshBasicMaterial
          color={project.accent}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Content cards inside device */}
      {[-0.5, 0.5].map((x, i) => (
        <mesh key={i} position={[x, 0.05, 0.05]}>
          <planeGeometry args={[0.75, 0.45]} />
          <meshBasicMaterial
            color={project.accent}
            transparent
            opacity={0.15}
          />
        </mesh>
      ))}

      {/* Bottom status line */}
      <mesh position={[0, -0.38, 0.05]}>
        <planeGeometry args={[1.5, 0.06]} />
        <meshBasicMaterial
          color={project.accent}
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  );
}
