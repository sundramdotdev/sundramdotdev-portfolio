"use client";

import { StudioLighting } from "./lighting";
import { StudioEnvironment } from "./studio-environment";
import { ProjectPlinths } from "./project-plinths";
import { CameraController } from "./camera-controller";
import { StudioProjectItem } from "./types";

interface StudioSceneProps {
  progressRef: React.RefObject<number>;
  projects: StudioProjectItem[];
  onSelectProject?: (slug: string) => void;
}

export function StudioScene({
  progressRef,
  projects,
  onSelectProject,
}: StudioSceneProps) {
  return (
    <>
      <CameraController progressRef={progressRef} />
      <StudioLighting />
      <StudioEnvironment />
      <ProjectPlinths projects={projects} onSelectProject={onSelectProject} />
    </>
  );
}
