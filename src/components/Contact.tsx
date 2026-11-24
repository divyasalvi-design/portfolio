"use client";

import { useEffect, useRef, useState } from "react";

const EMAIL = "divyasalvi260@gmail.com";

export function Contact() {
  const flowRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const flow = flowRef.current;
    if (!flow) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !matchMedia("(hover:hover)").matches) {
            flow.classList.add("live");
          }
        });
      },
      { threshold: 0.5 },
    );
    io.observe(flow);
    return () => io.disconnect();
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied("✓ Email copied");
    } catch {
      setCopied(`Copy blocked: the address is ${EMAIL}`);
    }
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-h">
      <div
        className="canvas grid-bg"
        style={{ position: "absolute", inset: 0, opacity: 0.5 }}
        aria-hidden="true"
      />
      <div className="wrap" style={{ position: "relative" }}>
        <div className="sec-head reveal" style={{ justifyContent: "center" }}>
          <span className="tag">05 / Contact</span>
        </div>
        <h2 id="contact-h" className="reveal">
          Let&apos;s create
          <br />
          something.
        </h2>
        <p className="lead reveal">
          I&apos;m open to full-time UI/UX roles. If you&apos;re building
          something people should love using, I&apos;d like to hear about it.
        </p>

        <div className="flow reveal" id="flow" ref={flowRef}>
          <div className="pf a">
            <span className="mono">Frame A</span>
            <h3>Your Idea</h3>
            <p>A product, a problem, a role on your team.</p>
            <span className="node" />
          </div>
          <div className="conn">
            <svg viewBox="0 0 200 60" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 30 C 70 30, 130 30, 194 30" />
              <path
                d="M186 23 L196 30 L186 37"
                style={{ strokeDasharray: 30, strokeDashoffset: 30 }}
              />
            </svg>
            <span className="trig">On click → Navigate</span>
          </div>
          <div className="pf b">
            <span className="mono">Frame B</span>
            <h3>Let&apos;s Build It</h3>
            <p>Research, flows, UI and a clean handoff.</p>
            <span className="node" />
          </div>
        </div>

        <div className="contact-actions reveal">
          <a className="mail" href={`mailto:${EMAIL}`}>
            {EMAIL} <span aria-hidden="true">↗</span>
          </a>
          <div className="socials">
            <button className="btn ghost" type="button" onClick={copyEmail}>
              Copy email
            </button>
            <a
              className="btn dark"
              href={`mailto:${EMAIL}?subject=Hello%20Divya`}
            >
              Email me
            </a>
            <a
              className="btn ghost"
              href="https://www.linkedin.com/in/divyasalvi891/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
          <span className="copied" role="status">
            {copied}
          </span>
        </div>
      </div>
    </section>
  );
}
