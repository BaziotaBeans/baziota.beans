import { DownloadIcon } from "./icons/DownloadIcon";
import { downloadCV, type CVLanguage } from "./utils/downloadCV";

interface CVOptionButtonProps {
  language: CVLanguage;
  label: string;
}

export function CVOptionButton({ language, label }: CVOptionButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    downloadCV(language);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="relative flex items-center justify-center gap-2 bg-black/55 px-6 py-4 border-4 border-green-950 text-base rounded-2xl font-semibold text-white cursor-pointer overflow-hidden transition-all hover:border-green-700 group hover:transition-all duration-700 hover:duration-700"
    >
      <DownloadIcon className="relative z-10 w-6 h-6 fill-white transition-all duration-700 group-hover:fill-white" />
      <span className="relative z-10 font-bold transition-colors duration-700 group-hover:text-white">
        {label}
      </span>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-5 h-5 bg-green-700 rounded-full opacity-0 transition-all duration-700 group-hover:w-[200px] group-hover:h-[200px] group-hover:opacity-100"></span>
    </button>
  );
}

