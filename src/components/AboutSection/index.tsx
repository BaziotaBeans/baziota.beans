import { TextHoverEffect } from "../animated/TextHoverEffect";

export function AboutSection() {
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-36 w-full flex flex-col items-center justify-center">
        <TextHoverEffect text="Beans" />
      </div>
    </section>
  );
}
