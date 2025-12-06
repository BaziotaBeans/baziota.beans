"use client";

import { TbMenu } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed z-50 top-4 border border-zinc-200/10 bg-zinc-50/15 backdrop-blur-xl rounded-4xl py-3 px-6 md:py-2 w-72 md:w-auto">
      <div className="flex items-center justify-between md:hidden">
        <div className="w-8 h-8 grid grid-cols-3 gap-1">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
            const isActive = [1, 3, 4, 5, 7].includes(index);
            return (
              <div
                key={index}
                className={`w-full h-full ${
                  isActive ? "bg-green-400" : "bg-transparent"
                }`}
              />
            );
          })}
        </div>

        <button className="cursor-pointer" onClick={handleOpenMenu}>
          {isOpen ? (
            <CgClose className="size-8 text-neutral-500" />
          ) : (
            <TbMenu className="size-8 text-neutral-500" />
          )}
        </button>
      </div>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-8 justify-between">
          <li>
            <Link href="/" className="header-nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="header-nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/" className="header-nav-link">
              Works
            </Link>
          </li>
          <li>
            <Link href="/" className="header-nav-link">
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
      <nav
        className={cn("block md:hidden mt-8 pb-2", isOpen ? "block" : "hidden")}
      >
        <ul className="flex flex-col gap-8">
          <li>
            <Link href="/" className="header-nav-link-mobile">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="header-nav-link-mobile">
              About
            </Link>
          </li>
          <li>
            <Link href="/" className="header-nav-link-mobile">
              Works
            </Link>
          </li>
          <li>
            <Link href="/" className="header-nav-link-mobile">
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
