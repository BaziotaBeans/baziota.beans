"use client";

import LiquidEther from "../LiquidEther";

export function Hero() {
  return (
    <section className="w-full h-screen relative bg-[url('/images/hero.png')] bg-cover bg-top bg-no-repeat relative">
      <LiquidEther
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
    </section>
  );
}
