"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const PTS: [number, number][] = [
  [0.62, 0.42],
  [0.3, 0.62],
  [0.7, 0.3],
  [0.22, 0.38],
  [0.55, 0.7],
  [0.4, 0.3],
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const curRef = useRef<HTMLDivElement>(null);
  const minisRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const hero = heroRef.current;
    const cur = curRef.current;
    if (!hero || !cur) return;

    let pi = 0;
    const moveCur = () => {
      const r = hero.getBoundingClientRect();
      const [x, y] = PTS[pi++ % PTS.length];
      cur.style.transform = `translate(${x * r.width}px,${y * r.height}px)`;
    };
    moveCur();
    const timer = setInterval(moveCur, 2600);

    const fine = matchMedia("(pointer:fine)").matches;
    const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
    const onMove = (e: MouseEvent) => {
      if (!fine || reduce) return;
      const cx = e.clientX / innerWidth - 0.5;
      const cy = e.clientY / innerHeight - 0.5;
      minisRef.current.forEach((m, i) => {
        if (!m) return;
        const d = (i + 1) * 8;
        m.style.translate = `${cx * d}px ${cy * d}px`;
      });
    };
    hero.addEventListener("mousemove", onMove);

    return () => {
      clearInterval(timer);
      hero.removeEventListener("mousemove", onMove);
    };
  }, []);

  const setMini = (el: HTMLDivElement | null, i: number) => {
    if (el) minisRef.current[i] = el;
  };

  return (
    <section className="hero" id="top" aria-label="Introduction" ref={heroRef}>
      <div className="canvas grid-bg" aria-hidden="true" />

      <div
        className="mini"
        style={{ width: 104, left: "50%", top: "18%", animationDelay: "-2s" }}
        aria-hidden="true"
        ref={(el) => setMini(el, 0)}
      >
        <span>Evently / Home</span>
        <Image src="/img/ev-home.webp" alt="" width={360} height={800} />
      </div>
      <div
        className="mini"
        style={{ width: 98, left: "59%", top: "44%", animationDelay: "-4s" }}
        aria-hidden="true"
        ref={(el) => setMini(el, 1)}
      >
        <span>LinguaNest / Streak</span>
        <Image src="/img/ln-streak.webp" alt="" width={420} height={933} />
      </div>
      <div
        className="mini"
        style={{ width: 92, left: "53%", bottom: "4%", animationDelay: "-1s" }}
        aria-hidden="true"
        ref={(el) => setMini(el, 2)}
      >
        <span>Evently / Onboarding</span>
        <Image src="/img/ev-onb1.webp" alt="" width={420} height={933} />
      </div>

      <span
        className="float-label hide-m"
        style={{ background: "var(--violet)", left: "6%", top: "13%" }}
        aria-hidden="true"
      >
        ◇ Component
      </span>
      <span
        className="float-label hide-m"
        style={{
          background: "var(--red)",
          left: "44%",
          top: "13%",
          animationDelay: "-3s",
        }}
        aria-hidden="true"
      >
        # Frame 01
      </span>
      <span
        className="float-label hide-m"
        style={{
          background: "var(--green)",
          left: "3%",
          bottom: "6%",
          animationDelay: "-1.5s",
        }}
        aria-hidden="true"
      >
        ⇵ Auto Layout
      </span>
      <span
        className="float-label hide-m"
        style={{
          background: "var(--sel)",
          left: "56%",
          bottom: "9%",
          animationDelay: "-4.5s",
        }}
        aria-hidden="true"
      >
        ▶ Prototype
      </span>

      <div className="cursor" ref={curRef} aria-hidden="true">
        <svg width="18" height="22" viewBox="0 0 18 22">
          <path
            d="M1 1l15 9.5-6.6 1.4L6 19z"
            fill="#A259FF"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        <span className="tagn" style={{ background: "var(--violet)" }}>
          Divya
        </span>
      </div>

      <div className="wrap hero-inner">
        <div>
          <div className="status">
            <span className="pulse" />
            Open to full-time roles · Udaipur, Rajasthan, India
          </div>
          <div className="frame-label">
            <svg viewBox="0 0 12 12" aria-hidden="true">
              <path
                d="M3 0v12M9 0v12M0 3h12M0 9h12"
                stroke="currentColor"
                fill="none"
              />
            </svg>
            Frame 01 — Hello
          </div>
          <div className="selectable" style={{ display: "inline-block" }}>
            <span className="h tl" />
            <span className="h tr" />
            <span className="h bl" />
            <span className="h br" />
            <p className="name" aria-label="Divya Salvi">
              Divya
              <br />
              <em>Salvi.</em>
            </p>
            <span className="dim">Hug × Hug</span>
          </div>
          <div className="role">
            <h1>UI UX Designer</h1>
            <span className="chip">
              <b style={{ background: "var(--violet)" }} />
              Figma
            </span>
            <span className="chip">
              <b style={{ background: "var(--sky)" }} />
              Research → Design
            </span>
          </div>
          <p className="intro">
            A Computer Science Engineering graduate who designs user-centred
            digital products: wireframes, prototypes and design systems built in
            Figma, focused on experiences that feel intuitive and engaging.
          </p>
          <div className="ctas">
            <a className="btn dark" href="#work">
              Explore My Work <span aria-hidden="true">→</span>
            </a>
            <a className="btn ghost" href="#contact">
              Let&apos;s Collaborate
            </a>
          </div>
        </div>

        <aside className="props" aria-label="Designer properties">
          <header>
            Design <span>divya.fig</span>
          </header>
          <div className="grp">
            <div className="t">Frame</div>
            <div className="row">
              <span className="f">
                <i>Role</i>UI/UX
              </span>
              <span className="f">
                <i>Mode</i>Full-time
              </span>
            </div>
          </div>
          <div className="grp">
            <div className="t">Position</div>
            <div className="row">
              <span className="f">
                <i>X</i>Deogarh
              </span>
              <span className="f">
                <i>Y</i>Rajasthan
              </span>
            </div>
          </div>
          <div className="grp">
            <div className="t">Currently</div>
            <div className="f" style={{ display: "block" }}>
              UI/UX Design Intern
              <br />
              <i>@ Toba Tech Solutions</i>
            </div>
          </div>
          <div className="grp">
            <div className="t">Fill</div>
            <div className="sw">
              <b style={{ background: "#F24E1E" }} />
              <b style={{ background: "#FF7262" }} />
              <b style={{ background: "#A259FF" }} />
              <b style={{ background: "#1ABCFE" }} />
              <b style={{ background: "#0ACF83" }} />
            </div>
          </div>
          <div className="grp">
            <div className="t">Text</div>
            <div className="f" style={{ display: "block" }}>
              Bricolage Grotesque
              <br />
              <i>ExtraBold · 168 / 88%</i>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
