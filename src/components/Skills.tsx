"use client";

import { useCallback, useState } from "react";
import { SKILL_CATEGORIES, TOOLS } from "../data/caseStudies";

const FrameIcon = () => (
  <svg viewBox="0 0 14 14" aria-hidden="true">
    <path
      d="M3 1v12M11 1v12M1 3h12M1 11h12"
      stroke="currentColor"
      strokeWidth="1.3"
      fill="none"
    />
  </svg>
);

export function Skills() {
  const [active, setActive] = useState(0);
  const cat = SKILL_CATEGORIES[active];

  const select = useCallback((i: number, focus?: boolean) => {
    setActive(i);
    if (focus) {
      requestAnimationFrame(() => {
        document.getElementById(`tab-${SKILL_CATEGORIES[i].id}`)?.focus();
      });
    }
  }, []);

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      select((i + 1) % SKILL_CATEGORIES.length, true);
    }
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      select((i + SKILL_CATEGORIES.length - 1) % SKILL_CATEGORIES.length, true);
    }
  };

  return (
    <section id="skills" aria-labelledby="skills-h" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="tag">03 / Toolkit</span>
          <h2 id="skills-h">Design toolkit</h2>
        </div>
        <div className="inspector reveal">
          <div className="layers" role="tablist" aria-label="Skill categories">
            <div className="pane-t">Layers</div>
            {SKILL_CATEGORIES.map((c, i) => (
              <button
                key={c.id}
                className="layer"
                role="tab"
                id={`tab-${c.id}`}
                aria-controls="stage"
                aria-selected={i === active}
                tabIndex={i === active ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                <FrameIcon />
                {c.name}
                <span className="n">{c.skills.length}</span>
              </button>
            ))}
          </div>

          <div
            className="stage"
            id="stage"
            role="tabpanel"
            aria-live="polite"
            aria-labelledby={`tab-${cat.id}`}
          >
            <div className="stage-frame">
              <span className="mono">{cat.name} — selected</span>
              <h3>{cat.name}</h3>
              <p>{cat.desc}</p>
              <div className="skill-list">
                {cat.skills.map((s, k) => (
                  <span
                    key={s}
                    className="skill"
                    style={
                      {
                        "--c": cat.color,
                        animationDelay: `${k * 50}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <i />
                    {s}
                  </span>
                ))}
              </div>
              <div className="variants">
                <span
                  className="mono"
                  style={{ color: "var(--ink2)", alignSelf: "center" }}
                >
                  Variant:
                </span>
                {SKILL_CATEGORIES.map((v, k) => (
                  <span
                    key={v.id}
                    className="chip"
                    style={
                      k === active
                        ? { borderColor: "var(--sel)", color: "var(--sel)" }
                        : undefined
                    }
                  >
                    <b style={{ background: v.color }} />
                    {v.variant}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="tools">
            <div className="pane-t">Assets · Tools</div>
            <div className="tool-grid">
              {TOOLS.map(([name, abbr, color]) => {
                const on = cat.tools.includes(name);
                return (
                  <div
                    key={name}
                    className={`tool${on ? " hl" : " dim"}`}
                    data-t={name}
                  >
                    <span className="ic" style={{ background: color }}>
                      {abbr}
                    </span>
                    {name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
