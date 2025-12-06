"use client";

import DarkVeil from "../BackgroundAnimations/DarkVeil";
import LightRays from "../BackgroundAnimations/LightRays";
import { Me } from "../Me";
import { ActionButtons } from "./ActionButtons";

export function Hero() {
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-36 w-full flex flex-col items-center justify-center">
        <Me />
        <div className="flex items-center gap-2 rounded-2xl p-2.5 text-sm font-semibold text-zinc-300 bg-black/55 px-4 border border-green-950">
          <div className="circle-pulse-animation circle-pulse" /> 🚀 Available for
          opportunities
        </div>

        <h1 className="text-center font-array text-6xl mt-8">
          Welcome to <br /> my digital humble abode
        </h1>

        <p className="text-balance text-center text-zinc-300 font-semibold mt-4">
          I am an independent developer. <br /> My interests lie in brand
          experience and user experience.
        </p>

        <ActionButtons />

        {/* <button className="mt-6 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
          See more
        </button> */}
      </div>
    </section>
  );
}
