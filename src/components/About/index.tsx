import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { PiCursorClickLight } from "react-icons/pi";
import { GoBack } from "../GoBack";
import { ExperienceList } from "./ExperienceList";
import { EducationSection } from "./EducationSection";
import { Links } from "../Hero/Links";

export function About() {
  return (
    <section className="w-full relative z-50 bg-transparent py-30">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="space-y-4 w-full">
            <h1 className="text-4xl text-neutral-200 mb-8 font-array text-center md:text-left">
              ABOUT ME
            </h1>

            <p className="md:max-w-md max-w-full leading-relaxed text-gray-400 font-medium text-center md:text-left">
              I'm a passionate software engineer dedicated to crafting elegant
              solutions for complex problems. With expertise in full-stack
              development, I enjoy building user-centric applications that make
              a difference. <br />
              <br /> I love transforming ideas into intuitive digital
              experiences, always focusing on performance, usability, and clean
              architecture. Collaboration drives my process — I enjoy working
              closely with teams to build meaningful products that solve
              real-world challenges.
            </p>
          </div>

          <div className="bg-white h-auto p-3 w-72 rotate-6 relative transition-all duration-300 hover:scale-105 hover:rotate-12 shrink-0">
            <Image
              src="/images/me.jpeg"
              alt="Beans"
              width={265.98}
              height={299.38}
            />

            <div className="flex flex-col items-start relative h-10 py-3">
              <span className="absolute bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-xs font-bold w-auto px-1 py-0.5 rounded-sm">
                BaziotaBeans
              </span>

              <PiCursorClickLight className="text-green-600 size-6 absolute left-22 bottom-0" />
            </div>
          </div>
        </div>

        <ExperienceList />
        <EducationSection />
      </MaxWidthWrapper>
    </section>
  );
}
