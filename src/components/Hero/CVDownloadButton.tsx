import { DownloadIcon } from "./icons/DownloadIcon";

interface CVDownloadButtonProps {
  onOpenModal: () => void;
}

export function CVDownloadButton({ onOpenModal }: CVDownloadButtonProps) {
  return (
    <button
      type="button"
      onClick={onOpenModal}
      className="relative w-full md:w-auto flex items-center gap-1 bg-black/55 px-9 py-2.5 border-4 border-green-950 text-base rounded-2xl font-semibold text-white cursor-pointer overflow-hidden transition-all hover:text-white hover:rounded-2xl group hover:transition-all duration-700 hover:duration-700"
    >
      <DownloadIcon className="absolute w-6 fill-white z-9 transition-all duration-700 -left-1/4 group-hover:left-4 group-hover:fill-white" />

      <span className="relative z-1 transition-all duration-700 -translate-x-3 group-hover:translate-x-3 font-bold">
        Download CV
      </span>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-green-700 rounded-full opacity-0 transition-all duration-700 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>
      <DownloadIcon className="absolute w-6 fill-white z-9 transition-all duration-700 right-4 group-hover:-right-1/4 group-hover:fill-[#212121]" />
    </button>
  );
}

