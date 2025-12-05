import Link from "next/link";

export function Header() {
  return (
    <header className="fixed z-50 top-2 border border-zinc-600 bg-zinc-50/25 backdrop-blur-2xl rounded-4xl px-4 py-2">
      <nav>
        <ul className="flex items-center gap-8 justify-between">
          <li>
            <Link href="/" className="header-nav-link">Home</Link>
          </li>
          <li>
            <Link href="/" className="header-nav-link">Works</Link>
          </li>
          <li>
            <Link href="/" className="header-nav-link">About</Link>
          </li>
          <li>
            <Link href="/" className="header-nav-link">FAQ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
