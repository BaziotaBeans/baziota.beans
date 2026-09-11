export type CVLanguage = "eng" | "pt";

const CV_FILENAMES: Record<CVLanguage, string> = {
  eng: "Fabio_Baziota_EN_CV.pdf",
  pt: "Fabio_Baziota_CV.pdf",
};

export const downloadCV = (language: CVLanguage): void => {
  const filename = CV_FILENAMES[language];
  const link = document.createElement("a");
  link.href = `/cv/${filename}`;
  link.download = filename;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  
  // Remove o link após um pequeno delay para garantir que o download foi iniciado
  setTimeout(() => {
    document.body.removeChild(link);
  }, 100);
};

