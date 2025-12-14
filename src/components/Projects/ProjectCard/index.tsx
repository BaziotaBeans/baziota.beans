"use client";

import TechBadges from "@/components/TechBadges";
import Image from "next/image";
import { TechBadge } from "./TechBage";

export interface Props {
  year: number;
  name: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export function ProjectCard({
  year,
  name,
  description,
  image,
  link,
  tags,
}: Props) {
  return (
    <div className="w-full h-full border border-gray-800 rounded-lg p-4">
      <span className="text-xs text-gray-400">{year}</span>
      <h3 className="text-lg font-bold text-gray-300">{name}</h3>
      <p className="font-medium text-sm text-gray-400">{description}</p>
      <div className="relative w-full h-44 rounded-md overflow-hidden mt-2">
        <Image
          src={image}
          alt={name}
          width={800}
          height={600}
          quality={100}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-semibold rounded-full bg-green-400/10 text-green-400 border border-green-400/20 hover:bg-green-400/20 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
