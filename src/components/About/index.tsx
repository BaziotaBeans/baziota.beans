import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { PiCursorClickLight } from "react-icons/pi";

import { TextHoverEffect } from "../animated/TextHoverEffect";

export function About() {
  return (
    <section className="w-full relative z-50 bg-transparent">
      <MaxWidthWrapper className="flex items-start gap-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-neutral-200">About</h1>

          <p className="max-w-md leading-relaxed text-gray-500 font-medium">
            I'm a passionate software engineer dedicated to crafting elegant
            solutions for complex problems. With expertise in full-stack
            development, I enjoy building user-centric applications that make a
            difference. <br />
            <br /> I love transforming ideas into intuitive digital experiences,
            always focusing on performance, usability, and clean architecture. Collaboration drives my process — I enjoy working closely with teams
            to build meaningful products that solve real-world challenges.
          </p>
        </div>

        <div className="bg-white h-auto p-3 w-64 rotate-6 relative transition-all duration-300 hover:scale-105 hover:rotate-12">
          <Image
            src="/images/me.jpeg"
            alt="Beans"
            width={265.98}
            height={299.38}
          />

          <Image
            src="/images/glasse-thug-life.png"
            alt="Glasse Thug Life"
            width={265.98}
            height={299.38}
            className="absolute top-16 left-12 object-cover w-40 scale-110"
          />
          <div className="flex flex-col items-start relative h-10 py-3">
            <span className="absolute bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-xs font-bold w-auto px-1 py-0.5 rounded-sm">
              BaziotaBeans
            </span>

            <PiCursorClickLight className="text-green-600 size-6 absolute left-22 bottom-0" />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
