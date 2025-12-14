"use client";

import Image from "next/image";
import { Globe } from "lucide-react";
import Link from "next/link";

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
    <div className="w-full h-full flex flex-col border border-gray-800 rounded-lg p-4 transition-all duration-500 hover:border-green-400/20 group">
      <span className="text-xs text-gray-400">{year}</span>
      <h3 className="text-lg font-bold text-gray-300">{name}</h3>
      <p className="font-medium text-sm text-gray-400">{description}</p>
      <div className="relative w-full h-44 rounded-lg overflow-hidden my-4">
        <Image
          src={image}
          alt={name}
          width={800}
          height={600}
          quality={100}
          className="w-full h-full object-cover transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs font-semibold rounded-full bg-green-400/10 text-green-400 border border-green-400/20 hover:bg-green-400/20 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={link}
        target="_blank"
        className="flex items-center justify-between gap-2 mt-auto group transition-all duration-500 cursor-pointer"
      >
        <span className="text-xs text-gray-400 transition-colors group-hover:text-green-400">
          Live Site
        </span>

        <Globe className="w-4 h-4 text-gray-400 transition-all duration-500 group-hover:text-gray-200 group-hover:rotate-180" />
      </Link>
    </div>
  );
}
