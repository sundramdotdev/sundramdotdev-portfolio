"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function StudioLighting() {
  const accentLightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (accentLightRef.current) {
      // Subtle organic breathing light pulse
      accentLightRef.current.intensity =
        1.0 + Math.sin(state.clock.elapsedTime * 0.7) * 0.1;
    }
  });

  return (
    <>
      {/* Subtle ambient light — deep charcoal tone */}
      <ambientLight color="#0E1013" intensity={0.9} />

      {/* Main architectural key light — crisp neutral champagne */}
      <directionalLight
        position={[6, 14, 8]}
        intensity={1.1}
        color="#F2F2EF"
      />

      {/* Cool graphite rim light for edge definition */}
      <directionalLight
        position={[-8, 12, -18]}
        intensity={0.65}
        color="#8E939C"
      />

      {/* Workstation focus light — subtle warm champagne */}
      <pointLight
        ref={accentLightRef}
        position={[0, 3.2, 0]}
        color="#C9C7BE"
        intensity={1.0}
        distance={16}
        decay={2}
      />

      {/* Product Gallery light */}
      <pointLight
        position={[0, 3.8, -12]}
        color="#C9C7BE"
        intensity={1.0}
        distance={18}
        decay={2}
      />

      {/* Client Success zone accent */}
      <pointLight
        position={[1.5, 3.5, -20]}
        color="#B0B2A9"
        intensity={0.8}
        distance={15}
        decay={2}
      />

      {/* Certificate Gallery focus light */}
      <pointLight
        position={[-1.2, 3.5, -27]}
        color="#E2E0D8"
        intensity={0.9}
        distance={15}
        decay={2}
      />

      {/* Destination / Contact subtle architectural focus */}
      <pointLight
        position={[0, 3.8, -42]}
        color="#F2F2EF"
        intensity={1.4}
        distance={22}
        decay={2}
      />
    </>
  );
}
