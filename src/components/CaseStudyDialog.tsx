"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { CASE_STUDIES, type CaseStudy } from "../data/caseStudies";

type Props = {
  openId: string | null;
  onClose: () => void;
};

function List({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}

function Body({ c }: { c: CaseStudy }) {
  const wide = c.gallery.filter((g) => g[2]);
  const rest = c.gallery.filter((g) => !g[2]);

  return (
    <>
      <div className="cs-hero">
        <span className="chip">{c.cat}</span>
        <h2 id="cs-title">{c.title}</h2>
        <p className="lead">{c.lead}</p>
      </div>
      <dl className="cs-facts">
        {c.facts.map(([a, b]) => (
          <div key={a}>
            <dt>{a}</dt>
            <dd>{b}</dd>
          </div>
        ))}
      </dl>
      <div className="cs-sec">
        <h4>Problem</h4>
        <p>{c.problem}</p>
      </div>
      <div className="cs-sec">
        <h4>Design approach</h4>
        <List items={c.approach} />
      </div>
      <div className="cs-sec">
        <h4>Key features</h4>
        <List items={c.features} />
      </div>
      <div className="cs-sec">
        <h4>Design decisions</h4>
        <List items={c.decisions} />
      </div>
      <div className="cs-sec">
        <h4>Outcome</h4>
        <p>{c.outcome}</p>
      </div>
      <div className="cs-sec">
        <h4>Tools</h4>
        <p>{c.tools}</p>
      </div>
      <div className="cs-sec">
        <h4>Screens</h4>
        <div>
          {wide.map(([src, cap]) => (
            <div className="cs-gal wide" key={src}>
              <figure>
                <Image
                  src={`/img/${src}`}
                  alt={`${c.title} — ${cap}`}
                  width={1100}
                  height={800}
                />
                <figcaption>{cap}</figcaption>
              </figure>
            </div>
          ))}
          {rest.length > 0 && (
            <div className="cs-gal" style={{ marginTop: 16 }}>
              {rest.map(([src, cap]) => (
                <figure key={src}>
                  <Image
                    src={`/img/${src}`}
                    alt={`${c.title} — ${cap}`}
                    width={420}
                    height={933}
                  />
                  <figcaption>{cap}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export function CaseStudyDialog({ openId, onClose }: Props) {
  const dlgRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const study = openId ? CASE_STUDIES[openId] : null;

  useEffect(() => {
    const dlg = dlgRef.current;
    if (!dlg) return;

    if (openId && study) {
      lastFocus.current = document.activeElement as HTMLElement;
      if (!dlg.open) dlg.showModal();
      dlg.scrollTop = 0;
      closeRef.current?.focus();
    } else if (dlg.open) {
      dlg.close();
    }
  }, [openId, study]);

  useEffect(() => {
    const dlg = dlgRef.current;
    if (!dlg) return;
    const onCloseEvt = () => {
      onClose();
      lastFocus.current?.focus();
    };
    dlg.addEventListener("close", onCloseEvt);
    return () => dlg.removeEventListener("close", onCloseEvt);
  }, [onClose]);

  return (
    <dialog
      id="cs"
      ref={dlgRef}
      aria-labelledby="cs-title"
      onClick={(e) => {
        if (e.target === dlgRef.current) dlgRef.current?.close();
      }}
    >
      <div className="cs-top">
        <span className="mono" id="cs-path">
          {study?.path ?? "Case study"}
        </span>
        <button
          className="close"
          ref={closeRef}
          aria-label="Close case study"
          onClick={() => dlgRef.current?.close()}
        >
          ×
        </button>
      </div>
      <div className="cs-body">{study && <Body c={study} />}</div>
    </dialog>
  );
}
