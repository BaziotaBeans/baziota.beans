"use client";

import DarkVeil from "../BackgroundAnimations/DarkVeil";
import LightRays from "../BackgroundAnimations/LightRays";
import { Me } from "../Me";

export function Hero() {
  return (
    <section className="w-full h-screen relative">
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#039356"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>
      <div className="absolute top-36 w-full flex flex-col items-center justify-center">
        <Me />
        <div className="flex items-center gap-2 rounded-2xl p-2 text-sm font-semibold text-zinc-300 bg-black/55 px-4 border border-green-950">
          🚀 Available for opportunities
        </div>

        <h1 className="text-center font-array text-6xl">
          Welcome to <br /> my digital humble abode
        </h1>

        <p className="text-balance text-center text-zinc-300 font-semibold mt-4">
          I am an independent developer. <br /> My interests lie in brand
          experience and user experience.
        </p>
      </div>
    </section>
  );
}
