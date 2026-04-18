import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { getBlurDataURL } from "@/lib/imageUtils";

type SetupItemFromMessages = {
  name: string;
  description: string;
  srcFront: string;
  srcBack: string;
  link: string;
};

export async function SetupGallery() {
  const t = await getTranslations("Setup");
  const items = t.raw("items") as SetupItemFromMessages[];

  return (
    <div>
      <h2 className="mt-4 text-3xl text-neutral-200 mb-4 font-array text-center md:text-left">
        {t("galleryTitle")}
      </h2>

      <p className="text-neutral-400 text-center md:text-left mb-8">
        {t("galleryDescription")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
        {items.map((setup) => (
          <div
            key={setup.name}
            className="relative w-full h-full flex flex-col border border-gray-800 rounded-lg p-2 transition-all duration-500 hover:border-green-400/20 hover:bg-gray-900 group overflow-hidden"
          >
            <div className="w-full h-44 rounded-md overflow-hidden bg-white">
              <Image
                src={setup.srcFront}
                alt={setup.name}
                width={800}
                height={600}
                quality={100}
                placeholder="blur"
                blurDataURL={getBlurDataURL()}
                className="w-full h-52 rounded-md object-contain"
              />
            </div>

            <span className="text-sm text-gray-400 font-bold text-center my-2">
              {setup.name}
            </span>

            <div className="absolute top-0 right-0 flex flex-col items-start w-full h-full bg-green-950/95 backdrop-grayscale-50 p-4 transition-all duration-500 group-hover:opacity-100 opacity-0">
              <p className="text-sm text-white font-medium">
                {setup.description}
              </p>

              <Link
                href={setup.link}
                className="font-medium mt-auto text-green-400 transition-all hover:text-green-600"
              >
                {t("buyLink")}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
