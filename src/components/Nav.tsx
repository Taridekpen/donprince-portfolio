import { useState } from "react";
import { profile } from "../data/profile";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-medium tracking-wide text-paper">
          {profile.shortName}
          <span className="text-signal">.</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="font-mono text-xs tracking-widest text-signal uppercase md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open ? (
        <ul
          id="mobile-nav"
          className="space-y-1 border-t border-line px-6 py-4 md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 text-sm text-paper"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
