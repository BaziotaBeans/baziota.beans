"use client";

import { Me } from "../Me";
import { ActionButtons } from "./ActionButtons";
import { Links } from "./Links";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="w-full relative px-4 max-w-96 md:max-w-none mx-auto h-screen">
      <div className="w-full flex flex-col items-center justify-center md:w-auto h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Me />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-center font-array text-4xl md:text-6xl mt-8"
        >
          {t("title")
            .split(/<br\s*\/?>/i)
            .map((line, index, array) => (
              <span key={`title-${line.trim()}-${index}`}>
                {line.trim()}
                {index < array.length - 1 && <br />}
              </span>
            ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-balance text-center text-gray-400 text-sm md:text-base font-semibold mt-4"
        >
          {t("description")
            .split(/<br\s*\/?>/i)
            .map((line, index, array) => (
              <span key={`description-${line.trim()}-${index}`}>
                {line.trim()}
                {index < array.length - 1 && <br />}
              </span>
            ))}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <ActionButtons />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          <Links className="mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
