"use client";

import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import { CloseIcon } from "./icons/CloseIcon";
import { CVOptionButton } from "./CVOptionButton";

interface CVDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVDownloadModal({ isOpen, onClose }: CVDownloadModalProps) {
  const t = useTranslations("Hero");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-gray-900 border-4 border-green-950 rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Close modal"
            >
              <CloseIcon className="w-6 h-6" />
            </button>

            <h2 className="text-2xl text-white mb-6 text-center font-array">
              {t("cvModalTitle")}
            </h2>

            <div className="flex flex-col gap-4">
              <CVOptionButton language="pt" label={t("cvPortuguese")} />
              <CVOptionButton language="eng" label={t("cvEnglish")} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
