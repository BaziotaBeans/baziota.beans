"use client";

import { ArrowIcon } from "./icons/ArrowIcon";
import { useTranslations } from "next-intl";

export function ContactButton() {
  const t = useTranslations("Hero");

  return (
    <a
      href="mailto:fabiobaziota@gmail.com"
      className="w-full md:w-auto relative flex items-center gap-1 bg-white hover:bg-neutral-600 px-9 py-2.5 border-4 border-neutral-500 text-base rounded-2xl font-semibold text-neutral-600 cursor-pointer overflow-hidden transition-all hover:text-white group hover:transition-all duration-700 hover:duration-700"
    >
      <ArrowIcon className="absolute w-6 fill-white z-9 transition-all duration-700 -left-1/4 group-hover:left-4 group-hover:fill-white" />

      <span className="relative z-1 transition-all duration-700 -translate-x-3 group-hover:translate-x-3 font-bold">
        {t("contactButton")}
      </span>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-neutral-600 rounded-full opacity-0 transition-all duration-700 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>
      <ArrowIcon className="absolute w-6 fill-neutral-600 z-9 transition-all duration-700 right-4 group-hover:-right-1/4 group-hover:fill-[#212121]" />
    </a>
  );
}

