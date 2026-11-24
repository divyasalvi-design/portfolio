"use client";

import { Suspense } from "react";
import { useReveal } from "../hooks/useReveal";
import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Nav } from "./Nav";
import { Skills } from "./Skills";
import { Work } from "./Work";

export function Portfolio() {
  useReveal();

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Suspense fallback={null}>
          <Hero />
        </Suspense>
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
