"use client";

import { Me } from "../Me";
import { ActionButtons } from "./ActionButtons";
import { Links } from "./Links";

export function Hero() {
  return (
    <section className="w-full relative py-36 px-4 max-w-96 md:max-w-none mx-auto min-h-screen">
      <div className="w-full flex flex-col items-center justify-center md:w-auto">
        <Me />

        <h1 className="text-center font-array text-4xl md:text-6xl mt-8">
          Welcome to <br /> my digital humble abode
        </h1>

        <p className="text-balance text-center text-gray-400 text-sm md:text-base font-semibold mt-4">
          I am an independent developer. <br /> My interests lie in brand
          experience and user experience.
        </p>

        <ActionButtons />

        <Links className="mt-8" />
      </div>
    </section>
  );
}
