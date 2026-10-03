"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { CAMERA_WAYPOINTS } from "./waypoints";

interface CameraControllerProps {
  progressRef: React.RefObject<number>;
}

export function CameraController({ progressRef }: CameraControllerProps) {
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentPos = useRef(new THREE.Vector3(0, 2.6, 9.0));
  const currentLookAt = useRef(new THREE.Vector3(0, 1.2, 0.0));
  const targetPos = useRef(new THREE.Vector3());
  const targetLookAt = useRef(new THREE.Vector3());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    const progress = Math.min(Math.max(progressRef.current ?? 0, 0), 1);

    // Find the current waypoint segment
    const waypoints = CAMERA_WAYPOINTS;
    let prevIndex = 0;

    for (let i = 0; i < waypoints.length - 1; i++) {
      if (progress >= waypoints[i].progress && progress <= waypoints[i + 1].progress) {
        prevIndex = i;
        break;
      }
      if (progress > waypoints[i + 1].progress && i === waypoints.length - 2) {
        prevIndex = i;
      }
    }

    const nextIndex = Math.min(prevIndex + 1, waypoints.length - 1);
    const p1 = waypoints[prevIndex];
    const p2 = waypoints[nextIndex];

    const span = p2.progress - p1.progress || 1;
    const rawT = Math.min(Math.max((progress - p1.progress) / span, 0), 1);

    // Smoothstep easing for cinematic continuity
    const t = rawT * rawT * (3 - 2 * rawT);

    // Compute base waypoint position
    const baseX = THREE.MathUtils.lerp(p1.position[0], p2.position[0], t);
    const baseY = THREE.MathUtils.lerp(p1.position[1], p2.position[1], t);
    const baseZ = THREE.MathUtils.lerp(p1.position[2], p2.position[2], t);

    // Subtle parallax from mouse
    const mouseParallaxX = mouseRef.current.x * 0.25;
    const mouseParallaxY = mouseRef.current.y * 0.15;

    targetPos.current.set(
      baseX + mouseParallaxX,
      baseY + mouseParallaxY,
      baseZ
    );

    // Compute base lookAt
    const lookX = THREE.MathUtils.lerp(p1.target[0], p2.target[0], t);
    const lookY = THREE.MathUtils.lerp(p1.target[1], p2.target[1], t);
    const lookZ = THREE.MathUtils.lerp(p1.target[2], p2.target[2], t);

    targetLookAt.current.set(
      lookX + mouseParallaxX * 0.3,
      lookY + mouseParallaxY * 0.3,
      lookZ
    );

    // Smooth interpolation with delta clamp to avoid large jumps on tab refocus
    const lerpSpeed = Math.min(delta * 4.5, 0.2);
    currentPos.current.lerp(targetPos.current, lerpSpeed);
    currentLookAt.current.lerp(targetLookAt.current, lerpSpeed);

    state.camera.position.copy(currentPos.current);
    state.camera.lookAt(currentLookAt.current);

    // Smooth FOV interpolation if perspective camera
    if (state.camera instanceof THREE.PerspectiveCamera) {
      const targetFov = THREE.MathUtils.lerp(p1.fov ?? 45, p2.fov ?? 45, t);
      state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, targetFov, lerpSpeed);
      state.camera.updateProjectionMatrix();
    }
  });

  return null;
}
