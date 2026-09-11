"use client";

import { useLocale } from "next-intl";
import { changeLocale } from "@/app/actions/locale";
import { useTransition, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const locales = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
] as const;

export function LocaleSelector() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale || isPending) return;

    startTransition(async () => {
      await changeLocale(newLocale);
      window.location.reload();
    });
  };

  const selectedLocale = locales.find((l) => l.code === locale);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-2 mb-2"
          >
            {locales.map((item, index) => {
              const isSelected = locale === item.code;
              return (
                <motion.button
                  key={item.code}
                  onClick={() => {
                    handleLocaleChange(item.code);
                    setIsExpanded(false);
                  }}
                  disabled={isPending}
                  className={cn(
                    "relative flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer",
                    "bg-zinc-900/80 border border-zinc-200/10 backdrop-blur-xl",
                    "hover:bg-zinc-800/80 hover:border-green-400/30",
                    "transition-all duration-200",
                    "shadow-lg shadow-black/20",
                    isSelected && "bg-green-400/10 border-green-400/30",
                    isPending && "opacity-50 cursor-not-allowed"
                  )}
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.span
                    className="text-2xl leading-none select-none"
                    animate={{
                      scale: isSelected ? [1, 1.2, 1] : 1,
                      rotate: isSelected ? [0, -10, 10, 0] : 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                  >
                    {item.flag}
                  </motion.span>
                  <span
                    className={cn(
                      "text-sm font-semibold whitespace-nowrap",
                      isSelected ? "text-green-400" : "text-neutral-300"
                    )}
                  >
                    {item.label}
                  </span>
                  {isSelected && (
                    <motion.div
                      className="absolute inset-0 bg-green-400/5 rounded-2xl"
                      layoutId="selectedLocale"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        disabled={isPending}
        className={cn(
          "relative flex items-center justify-center",
          "w-14 h-14 rounded-2xl",
          "bg-zinc-900/80 border border-zinc-200/10 backdrop-blur-xl",
          "hover:bg-zinc-800/80 hover:border-green-400/30",
          "shadow-lg shadow-black/30",
          "transition-all duration-200",
          isPending && "opacity-50 cursor-not-allowed"
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          rotate: isExpanded ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        aria-label="Toggle language selector"
      >
        <motion.span
          className="text-2xl leading-none select-none"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {selectedLocale?.flag}
        </motion.span>

        <motion.div
          className="absolute inset-0 rounded-2xl bg-green-400/10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -inset-1 rounded-2xl bg-green-400/5 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.button>
    </div>
  );
}