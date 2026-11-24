"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { CaseStudyDialog } from "./CaseStudyDialog";

function Handles() {
  return (
    <>
      <span className="h tl" />
      <span className="h tr" />
      <span className="h bl" />
      <span className="h br" />
    </>
  );
}

export function Work() {
  const gridRef = useRef<HTMLDivElement>(null);
  const wiresRef = useRef<SVGSVGElement>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  const drawWires = useCallback(() => {
    const grid = gridRef.current;
    const wires = wiresRef.current;
    if (!grid || !wires) return;
    if (innerWidth < 900) {
      wires.innerHTML = "";
      return;
    }
    const g = grid.getBoundingClientRect();
    const box = (id: string) =>
      grid.querySelector(`[data-id=${id}] .art`)!.getBoundingClientRect();
    const ev = box("evently");
    const ln = box("linguanest");
    const pa = box("pats");
    const tm = box("tripmate");
    const P = (x: number, y: number): [number, number] => [
      x - g.left,
      y - g.top,
    ];
    const c = (a: [number, number], b: [number, number]) => {
      const [x1, y1] = a;
      const [x2, y2] = b;
      const my = (y1 + y2) / 2;
      return `M${x1} ${y1} C ${x1} ${my}, ${x2} ${my}, ${x2} ${y2}`;
    };
    const paths = [
      c(
        P(ev.left + ev.width * 0.25, ev.bottom),
        P(ln.left + ln.width * 0.5, ln.top),
      ),
      c(
        P(ev.right - ev.width * 0.2, ev.bottom),
        P(pa.left + pa.width * 0.5, pa.top),
      ),
      c(
        P(ln.left + ln.width * 0.6, ln.bottom),
        P(tm.left + tm.width * 0.3, tm.top),
      ),
    ];
    wires.innerHTML = paths
      .map((p) => {
        const parts = p.split(" ");
        const cx = parts[parts.length - 2];
        const cy = parts[parts.length - 1];
        return `<path d="${p}"/><circle cx="${cx}" cy="${cy}" r="4" fill="#0D99FF"/>`;
      })
      .join("");
  }, []);

  useEffect(() => {
    drawWires();
    const t = setTimeout(drawWires, 600);
    addEventListener("resize", drawWires);
    return () => {
      clearTimeout(t);
      removeEventListener("resize", drawWires);
    };
  }, [drawWires]);

  const open = (id: string) => setOpenId(id);

  return (
    <>
      <section className="work" id="work" aria-labelledby="work-h">
        <div
          className="canvas grid-bg"
          style={{ position: "absolute", inset: 0, opacity: 0.6 }}
          aria-hidden="true"
        />
        <div className="wrap" style={{ position: "relative" }}>
          <div className="sec-head reveal">
            <span className="tag">04 / Selected Works</span>
            <h2 id="work-h">Selected works</h2>
          </div>
          <div className="work-grid" id="workGrid" ref={gridRef}>
            <svg className="wires" id="wires" ref={wiresRef} aria-hidden="true" />

            <article
              className="proj p-ev reveal"
              data-id="evently"
              onClick={() => open("evently")}
              onKeyDown={(e) => e.key === "Enter" && open("evently")}
              tabIndex={0}
              role="button"
              aria-label="Open Evently case study"
            >
              <div className="fname">
                <b># Evently — Case study</b>
                <span>Mobile · 1440 × 720</span>
              </div>
              <div className="selectable">
                <Handles />
                <div className="art">
                  <div className="tb">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        open("evently");
                      }}
                    >
                      ◎ View Case Study
                    </button>
                  </div>
                  <div className="ph">
                    <Image
                      src="/img/ev-splash.webp"
                      alt="Evently splash screen"
                      width={360}
                      height={800}
                    />
                  </div>
                  <div className="ph">
                    <Image
                      src="/img/ev-login.webp"
                      alt="Evently login screen"
                      width={360}
                      height={800}
                    />
                  </div>
                  <div className="ph">
                    <Image
                      src="/img/ev-home.webp"
                      alt="Evently home screen with event categories"
                      width={360}
                      height={800}
                    />
                  </div>
                  <div className="ph">
                    <Image
                      src="/img/ev-vendors.webp"
                      alt="Evently vendor comparison screen"
                      width={360}
                      height={800}
                    />
                  </div>
                  <div className="ph">
                    <Image
                      src="/img/ev-chat.webp"
                      alt="Evently vendor chat screen"
                      width={360}
                      height={800}
                    />
                  </div>
                </div>
                <span className="dim">Research · Persona · SWOT · UI</span>
              </div>
              <div className="info">
                <div>
                  <h3>Evently</h3>
                  <p>
                    An event-planning app that brings vendors, budgets and
                    bookings into one place, built on a persona, an empathy map,
                    a competitor comparison and a SWOT analysis.
                  </p>
                </div>
                <div className="chips">
                  <span className="chip">
                    <b style={{ background: "#F2979C" }} />
                    Event planning
                  </span>
                  <span className="chip">UX research</span>
                  <span className="chip">Mobile app</span>
                </div>
              </div>
            </article>

            <article
              className="proj p-ln reveal"
              data-id="linguanest"
              onClick={() => open("linguanest")}
              onKeyDown={(e) => e.key === "Enter" && open("linguanest")}
              tabIndex={0}
              role="button"
              aria-label="Open LinguaNest case study"
            >
              <div className="fname">
                <b># LinguaNest — Redesign</b>
                <span>110 screens</span>
              </div>
              <div className="selectable">
                <Handles />
                <div className="art">
                  <div className="tb">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        open("linguanest");
                      }}
                    >
                      ◎ View Case Study
                    </button>
                  </div>
                  <div className="ph">
                    <Image
                      src="/img/ln-login.webp"
                      alt="LinguaNest login screen with bird mascot"
                      width={420}
                      height={933}
                    />
                  </div>
                  <div className="ph">
                    <Image
                      src="/img/ln-survey.webp"
                      alt="LinguaNest onboarding survey"
                      width={420}
                      height={933}
                    />
                  </div>
                  <div className="ph">
                    <Image
                      src="/img/ln-streak.webp"
                      alt="LinguaNest streak celebration"
                      width={420}
                      height={933}
                    />
                  </div>
                </div>
                <span className="dim">390 × 844 · ×110</span>
              </div>
              <div className="info">
                <div>
                  <h3>LinguaNest</h3>
                  <p>
                    A redesign of an existing language-learning app across 110
                    screens: simpler, clearer, and more engaging to come back
                    to.
                  </p>
                </div>
                <div className="chips">
                  <span className="chip">
                    <b style={{ background: "#7C6CF2" }} />
                    EdTech
                  </span>
                  <span className="chip">Redesign</span>
                </div>
              </div>
            </article>

            <article
              className="proj p-pa reveal"
              data-id="pats"
              onClick={() => open("pats")}
              onKeyDown={(e) => e.key === "Enter" && open("pats")}
              tabIndex={0}
              role="button"
              aria-label="Open PATS case study"
            >
              <div className="fname">
                <b># PATS — Website</b>
                <span>Desktop · 1440</span>
              </div>
              <div className="selectable">
                <Handles />
                <div className="art">
                  <div className="tb">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        open("pats");
                      }}
                    >
                      ◎ View Case Study
                    </button>
                  </div>
                  <div className="scroller">
                    <Image
                      src="/img/pats.webp"
                      alt="PATS pet food website full landing page"
                      width={1100}
                      height={4218}
                    />
                  </div>
                  <span className="hint">hover to scroll ↓</span>
                </div>
                <span className="dim">1440 × 5511</span>
              </div>
              <div className="info">
                <div>
                  <h3>PATS</h3>
                  <p>
                    A nature-inspired pet-food e-commerce site that keeps
                    shopping simple and builds trust.
                  </p>
                </div>
                <div className="chips">
                  <span className="chip">
                    <b style={{ background: "#2F5A3E" }} />
                    E-commerce
                  </span>
                  <span className="chip">Web</span>
                </div>
              </div>
            </article>

            <article
              className="proj p-tm reveal"
              data-id="tripmate"
              onClick={() => open("tripmate")}
              onKeyDown={(e) => e.key === "Enter" && open("tripmate")}
              tabIndex={0}
              role="button"
              aria-label="Open TripMate case study"
            >
              <div className="fname">
                <b># TripMate — Practical task</b>
                <span>5 screens · 3 hrs</span>
              </div>
              <div className="selectable">
                <Handles />
                <div className="art">
                  <div className="tb">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        open("tripmate");
                      }}
                    >
                      ◎ View Case Study
                    </button>
                  </div>
                  <Image
                    src="/img/tripmate.webp"
                    alt="TripMate travel booking app — five screens: login, home, discover, destination detail, flights"
                    width={1600}
                    height={1137}
                  />
                  <span className="badge-time">⏱ 3:00:00 · speed challenge</span>
                </div>
                <span className="dim">5 frames · timed</span>
              </div>
              <div className="info">
                <div>
                  <h3>TripMate</h3>
                  <p>
                    A travel-booking app for searching flights, hotels and
                    activities, designed against the clock: five screens in
                    three hours.
                  </p>
                </div>
                <div className="chips">
                  <span className="chip">
                    <b style={{ background: "#E2402E" }} />
                    Travel
                  </span>
                  <span className="chip">Timed task</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CaseStudyDialog openId={openId} onClose={() => setOpenId(null)} />
    </>
  );
}
