"use client";

import { useEffect, useState } from "react";
import { Dots } from "./Dots";

const LINKS = [
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Toolkit", id: "skills" },
  { href: "#work", label: "Work", id: "work" },
] as const;

export function Nav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const so = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) so.observe(el);
    });
    return () => so.disconnect();
  }, []);

  return (
    <nav className="nav" aria-label="Primary">
      <a className="logo" href="#top">
        <Dots />
        Divya
      </a>
      {LINKS.map((l) => (
        <a
          key={l.id}
          className={`l${active === l.id ? " on" : ""}`}
          href={l.href}
        >
          {l.label}
        </a>
      ))}
      <a className="cta" href="#contact">
        Let&apos;s talk
      </a>
    </nav>
  );
}
