import { EducationItem } from "./EducationItem";

const education = [
  {
    degree: "Bachelor's Degree in Computer Engineering",
    institution: "Catholic University of Angola",
  },
];

export function EducationSection() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-neutral-200 mb-8 font-array">
        EDUCATION
      </h2>
      <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 dark:before:bg-gray-700">
        {education.map((edu, index) => (
          <EducationItem key={index} {...edu} />
        ))}
      </ol>
    </section>
  );
}

