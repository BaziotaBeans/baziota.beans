"use client";

import { useState } from "react";
import { ContactButton } from "./ContactButton";
import { CVDownloadButton } from "./CVDownloadButton";
import { CVDownloadModal } from "./CVDownloadModal";

export function ActionButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-2 mt-6 md:flex-row flex-col w-full md:w-auto">
        <ContactButton />
        <CVDownloadButton onOpenModal={() => setIsModalOpen(true)} />
      </div>

      <CVDownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
