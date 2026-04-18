import { getTranslations } from "next-intl/server";
import { EducationItem } from "./EducationItem";

type EducationFromMessages = {
  degree: string;
  institution: string;
  period?: string;
};

export async function EducationSection() {
  const t = await getTranslations("About");
  const education = t.raw("education") as EducationFromMessages[];

  return (
    <section className="mt-16">
      <h2 className="text-3xl text-neutral-200 mb-8 font-array">
        {t("educationTitle")}
      </h2>
      <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 dark:before:bg-gray-700">
        {education.map((edu, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: No problem with the index
          <EducationItem key={index} {...edu} />
        ))}
      </ol>
    </section>
  );
}
