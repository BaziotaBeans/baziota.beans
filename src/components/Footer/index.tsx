import Link from "next/link";
import { FaXTwitter, FaLinkedinIn, FaFacebookF, FaCodepen, FaInstagram, FaGithub } from "react-icons/fa6";


export function Footer() {
  return (
    <footer className="text-center text-sm text-gray-400 space-y-4 pb-4">
      <div className="flex items-center justify-center gap-4">
        <Link
          href="https://x.com/baziota"
          target="_blank"
          className="hero-links"
        >
          <FaXTwitter />
        </Link>
        <Link
          href="https://www.linkedin.com/in/f%C3%A1bio-baziota-57b979174/"
          target="_blank"
          className="hero-links"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href="https://codepen.io/baziotabeans"
          target="_blank"
          className="hero-links"
        >
          <FaCodepen />
        </Link>
        <Link
          href="https://www.instagram.com/fabiobaziota/"
          target="_blank"
          className="hero-links"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://github.com/BaziotaBeans"
          target="_blank"
          className="hero-links"
        >
          <FaGithub />
        </Link>
      </div>
      <p className="text-xs">
        &copy; {new Date().getFullYear()} BaziotaBeans. All rights reserved.
      </p>
    </footer>
  );
}
