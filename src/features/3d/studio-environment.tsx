"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

export function StudioEnvironment() {
  return (
    <group>
      {/* 1. Architectural Floor */}
      <StudioFloor />

      {/* 2. Perimeter Structural Columns */}
      <PerimeterColumns />

      {/* 3. Workstation Area (Hero & About) */}
      <Workstation />

      {/* 4. Client Success Vitrines */}
      <ClientVitrines />

      {/* 5. Certificate Exhibition Gallery Stands */}
      <CertificatePedestals />

      {/* 6. Blog Editorial Pylons */}
      <BlogPylons />

      {/* 7. Contact Gateway Portal */}
      <ContactPortal />

      {/* 8. Studio Dust Motes / Ambient Field */}
      <StudioMotes />
    </group>
  );
}

function StudioFloor() {
  return (
    <group position={[0, -0.05, -18]}>
      {/* Dark reflective graphite ground plate */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[26, 76]} />
        <meshStandardMaterial
          color="#0B0C0E"
          roughness={0.7}
          metalness={0.2}
        />
      </mesh>

      {/* Architectural Grid Lines */}
      <gridHelper
        args={[76, 38, "#C9C7BE", "#1A1D22"]}
        position={[0, 0.01, 0]}
      />
    </group>
  );
}

function PerimeterColumns() {
  const columnPositions: [number, number, number][] = useMemo(() => {
    const list: [number, number, number][] = [];
    for (let z = 10; z >= -46; z -= 7) {
      list.push([-6.2, 3.5, z]);
      list.push([6.2, 3.5, z]);
    }
    return list;
  }, []);

  return (
    <group>
      {columnPositions.map(([x, y, z], i) => (
        <group key={i} position={[x, y, z]}>
          <mesh>
            <boxGeometry args={[0.6, 7.5, 0.6]} />
            <meshStandardMaterial
              color="#131518"
              roughness={0.6}
              metalness={0.4}
            />
          </mesh>
          {/* Subtle vertical champagne accent edge line */}
          <mesh position={[x > 0 ? -0.31 : 0.31, 0, 0]}>
            <boxGeometry args={[0.02, 7.2, 0.02]} />
            <meshBasicMaterial color="#C9C7BE" transparent opacity={0.2} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Workstation() {
  const badgeRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (badgeRef.current) {
      badgeRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Sleek Minimalist Desk */}
      <mesh position={[0, 0.72, 0]}>
        <boxGeometry args={[3.2, 0.08, 1.4]} />
        <meshStandardMaterial
          color="#15171A"
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>

      {/* Desk legs */}
      <mesh position={[-1.4, 0.36, 0]}>
        <boxGeometry args={[0.08, 0.72, 1.2]} />
        <meshStandardMaterial color="#101114" roughness={0.7} />
      </mesh>
      <mesh position={[1.4, 0.36, 0]}>
        <boxGeometry args={[0.08, 0.72, 1.2]} />
        <meshStandardMaterial color="#101114" roughness={0.7} />
      </mesh>

      {/* Ultrawide Display Monitor */}
      <group position={[0, 1.3, -0.25]}>
        <RoundedBox args={[2.0, 0.95, 0.05]} radius={0.03} smoothness={4}>
          <meshStandardMaterial
            color="#141619"
            roughness={0.3}
            metalness={0.8}
          />
        </RoundedBox>
        {/* Screen */}
        <mesh position={[0, 0, 0.03]}>
          <planeGeometry args={[1.9, 0.85]} />
          <meshBasicMaterial color="#0A0B0E" />
        </mesh>
        {/* Subtle champagne code lines */}
        {[-0.25, -0.1, 0.05, 0.2].map((y, idx) => (
          <mesh key={idx} position={[-0.2, y, 0.035]}>
            <planeGeometry args={[1.2 - idx * 0.15, 0.04]} />
            <meshBasicMaterial
              color="#C9C7BE"
              transparent
              opacity={0.25 + idx * 0.08}
            />
          </mesh>
        ))}
        {/* Monitor Stand */}
        <mesh position={[0, -0.52, -0.05]}>
          <cylinderGeometry args={[0.04, 0.04, 0.2, 12]} />
          <meshStandardMaterial color="#1E2024" metalness={0.8} />
        </mesh>
        <mesh position={[0, -0.62, 0.05]}>
          <boxGeometry args={[0.5, 0.02, 0.3]} />
          <meshStandardMaterial color="#1E2024" metalness={0.8} />
        </mesh>
      </group>

      {/* Floating Holographic Brand Emblem */}
      <group ref={badgeRef} position={[0, 2.3, -0.3]}>
        <mesh>
          <octahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial
            color="#C9C7BE"
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshBasicMaterial color="#F2F2EF" />
        </mesh>
      </group>
    </group>
  );
}

function ClientVitrines() {
  return (
    <group position={[1.8, 0.8, -21]}>
      {[-1.2, 1.2].map((xOffset, idx) => (
        <group key={idx} position={[xOffset, 0, 0]}>
          <mesh position={[0, -0.4, 0]}>
            <boxGeometry args={[1.2, 0.8, 1.0]} />
            <meshStandardMaterial color="#15171A" roughness={0.6} />
          </mesh>
          <mesh position={[0, 0.35, 0]}>
            <boxGeometry args={[1.0, 0.7, 0.8]} />
            <meshStandardMaterial
              color="#9DA0A8"
              wireframe
              transparent
              opacity={0.15}
            />
          </mesh>
          <mesh position={[0, 0.25, 0]}>
            <dodecahedronGeometry args={[0.18, 0]} />
            <meshStandardMaterial
              color="#C9C7BE"
              roughness={0.3}
              metalness={0.7}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function CertificatePedestals() {
  // 3 pairs of floating framed stands in the Certificate Wing
  const stands = [
    { x: -1.8, z: -25.5 },
    { x: 0.0, z: -26.8 },
    { x: 1.8, z: -25.5 },
  ];

  return (
    <group position={[0, 1.1, 0]}>
      {stands.map((item, idx) => (
        <group key={idx} position={[item.x, 0, item.z]}>
          {/* Floor Plinth */}
          <mesh position={[0, -0.7, 0]}>
            <cylinderGeometry args={[0.45, 0.55, 0.3, 16]} />
            <meshStandardMaterial color="#16181C" roughness={0.6} />
          </mesh>
          {/* Slender stem */}
          <mesh position={[0, -0.3, 0]}>
            <cylinderGeometry args={[0.03, 0.03, 0.5, 12]} />
            <meshStandardMaterial color="#22252A" metalness={0.8} />
          </mesh>
          {/* Framed Certificate Tablet */}
          <RoundedBox args={[1.4, 0.95, 0.04]} radius={0.03} smoothness={4}>
            <meshStandardMaterial
              color="#15171A"
              roughness={0.3}
              metalness={0.7}
            />
          </RoundedBox>
          {/* Glowing Inner Border */}
          <mesh position={[0, 0, 0.025]}>
            <planeGeometry args={[1.3, 0.85]} />
            <meshBasicMaterial
              color="#C9C7BE"
              wireframe
              transparent
              opacity={0.15}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function BlogPylons() {
  return (
    <group position={[1.8, 1.2, -33]}>
      {[-1.0, 0, 1.0].map((x, idx) => (
        <group key={idx} position={[x * 1.3, idx * 0.1, -idx * 0.6]}>
          <mesh>
            <boxGeometry args={[1.1, 1.8, 0.06]} />
            <meshStandardMaterial
              color="#16181C"
              roughness={0.5}
              metalness={0.5}
            />
          </mesh>
          {[-0.4, -0.15, 0.1, 0.35].map((y, lineIdx) => (
            <mesh key={lineIdx} position={[0, y, 0.04]}>
              <planeGeometry args={[0.85 - lineIdx * 0.08, 0.05]} />
              <meshBasicMaterial
                color="#C9C7BE"
                transparent
                opacity={0.2}
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

function ContactPortal() {
  const ringRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.12;
    }
  });

  return (
    <group position={[0, 1.8, -44]}>
      {/* Outer architectural gate arch */}
      <mesh position={[-2.4, 0, 0]}>
        <boxGeometry args={[0.3, 3.6, 0.3]} />
        <meshStandardMaterial color="#16171B" metalness={0.6} />
      </mesh>
      <mesh position={[2.4, 0, 0]}>
        <boxGeometry args={[0.3, 3.6, 0.3]} />
        <meshStandardMaterial color="#16171B" metalness={0.6} />
      </mesh>
      <mesh position={[0, 1.8, 0]}>
        <boxGeometry args={[5.1, 0.3, 0.3]} />
        <meshStandardMaterial color="#16171B" metalness={0.6} />
      </mesh>

      {/* Central Rotating Architectural Ring */}
      <group ref={ringRef} position={[0, 0, 0]}>
        <mesh>
          <torusGeometry args={[1.6, 0.03, 16, 64]} />
          <meshStandardMaterial
            color="#C9C7BE"
            emissive="#C9C7BE"
            emissiveIntensity={0.5}
            roughness={0.3}
          />
        </mesh>
        <mesh rotation={[0, Math.PI / 4, 0]}>
          <torusGeometry args={[1.3, 0.02, 16, 64]} />
          <meshStandardMaterial
            color="#8E939C"
            wireframe
            transparent
            opacity={0.25}
          />
        </mesh>
      </group>

      {/* Floor pedestal */}
      <mesh position={[0, -1.7, 0]}>
        <cylinderGeometry args={[1.5, 1.8, 0.2, 32]} />
        <meshStandardMaterial color="#111215" roughness={0.7} />
      </mesh>
    </group>
  );
}

function StudioMotes() {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions] = useMemo(() => {
    const count = 120;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const rx = Math.sin(i * 12.9898) * 43758.5453;
      const ry = Math.sin(i * 78.233) * 43758.5453;
      const rz = Math.sin(i * 45.164) * 43758.5453;

      const normX = rx - Math.floor(rx);
      const normY = ry - Math.floor(ry);
      const normZ = rz - Math.floor(rz);

      pos[i * 3 + 0] = (normX - 0.5) * 14;
      pos[i * 3 + 1] = normY * 4.5 + 0.2;
      pos[i * 3 + 2] = (normZ - 0.5) * 56 - 18;
    }
    return [pos];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#C9C7BE"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
}
