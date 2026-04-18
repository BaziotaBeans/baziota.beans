import { getTranslations } from "next-intl/server";
import { ExperienceItem } from "./ExperienceItem";

type ExperienceFromMessages = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  website?: string;
};

export async function ExperienceList() {
  const t = await getTranslations("About");
  const experiences = t.raw("experiences") as ExperienceFromMessages[];

  return (
    <section className="mt-16">
      <h2 className="text-3xl text-neutral-200 mb-8 font-array">
        {t("experienceTitle")}
      </h2>
      <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 dark:before:bg-gray-700">
        {experiences.map((experience, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: No problem with the index
          <ExperienceItem key={index} {...experience} />
        ))}
      </ol>
    </section>
  );
}
