import { FaXTwitter, FaLinkedinIn, FaFacebookF, FaCodepen, FaInstagram, FaGithub } from "react-icons/fa6";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

export function Links({ className }: Props) {
  return (
    <div className={cn("flex items-center gap-8", className)}>
      <Link href="https://x.com/baziota" target="_blank" className="hero-links">
        <FaXTwitter />
      </Link>
      <Link href="https://www.linkedin.com/in/f%C3%A1bio-baziota-57b979174/" target="_blank" className="hero-links">
        <FaLinkedinIn />
      </Link>
      <Link href="https://codepen.io/baziotabeans" target="_blank" className="hero-links">
        <FaCodepen />
      </Link>
      <Link href="https://www.instagram.com/fabiobaziota/" target="_blank" className="hero-links">
        <FaInstagram />
      </Link>
      <Link href="https://github.com/BaziotaBeans" target="_blank" className="hero-links">
        <FaGithub />
      </Link>
    </div>
  );
}