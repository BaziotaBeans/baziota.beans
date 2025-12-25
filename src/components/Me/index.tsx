import Image from "next/image";
import { useTranslations } from "next-intl";

export function Me() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex flex-col items-center justify-center w-64">
      <Image src="/images/avatar.avif" alt="Avatar" width={70} height={70} />
      <div className="flex items-center gap-3 rounded-2xl p-2.5 text-xs font-semibold text-zinc-300 bg-black/55 px-4 border border-green-950">
        <div className="circle-pulse-animation circle-pulse" />
        <span>{t("opportunity")}</span>
      </div>
    </div>
  );
}
