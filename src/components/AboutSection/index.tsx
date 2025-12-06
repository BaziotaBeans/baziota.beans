import MaxWidthWrapper from "../MaxWidthWrapper";
import { TextHoverEffect } from "../animated/TextHoverEffect";

export function AboutSection() {
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
        <TextHoverEffect text="Beans" />

        <div className="absolute inset-0 w-full h-full flex flex-col bg-red-100/50">
          <MaxWidthWrapper>
            <h1>About</h1>
          </MaxWidthWrapper>
        </div>
      </div>
    </section>
  );
}
