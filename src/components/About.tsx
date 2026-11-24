import Image from "next/image";

export function About() {
  return (
    <section id="about" aria-labelledby="about-h">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="tag">02 / About</span>
          <h2 id="about-h">Behind the pixels</h2>
        </div>
        <div className="about-grid">
          <article className="pframe reveal">
            <div className="bar">
              <span className="mono">Profile / Divya Salvi</span>
              <span className="chip">
                <b style={{ background: "var(--green)" }} />
                Available
              </span>
            </div>
            <div className="body">
              <div className="photo">
                <Image
                  src="/img/divya.webp"
                  alt="Portrait of Divya Salvi under string lights"
                  width={500}
                  height={630}
                />
              </div>
              <div>
                <h3>Divya Salvi</h3>
                <span className="mono" style={{ color: "var(--ink2)" }}>
                  UI UX Designer
                </span>
                <dl className="meta">
                  <div>
                    <dt>Location</dt>
                    <dd>Deogarh, Rajasthan, India</dd>
                  </div>
                  <div>
                    <dt>Experience</dt>
                    <dd>
                      UI/UX Design Intern, Toba Tech Solutions{" "}
                      <span style={{ color: "var(--ink2)" }}>
                        · Aug 2026 – Present
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt>Education</dt>
                    <dd>
                      B.Tech, Computer Science · Geetanjali Institute of
                      Technical Studies, Udaipur{" "}
                      <span style={{ color: "var(--ink2)" }}>· 2021–2025</span>
                    </dd>
                  </div>
                  <div>
                    <dt>Course</dt>
                    <dd>
                      UI/UX Design, Basic to Advanced · SSV Tech Institute,
                      Surat
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="traits" aria-label="Traits">
              <span>Curious</span>
              <span>Creative</span>
              <span>Detail-oriented</span>
              <span>Empathetic</span>
              <span>Analytical</span>
              <span>Problem-solver</span>
              <span>Always learning</span>
            </div>
          </article>

          <div className="about-text reveal">
            <p>
              I came to design through <strong>Computer Science Engineering</strong>
              , and that path shapes how I work: I like to understand how
              something works, and who it&apos;s for, before I decide how it should
              look.
            </p>
            <p>
              For me, <strong>user needs come before aesthetics</strong>. I aim
              for simplicity, clarity and consistency, and every decision in a
              file should have a reason behind it.
            </p>
            <div className="process" aria-label="How I approach a new problem">
              <div>
                <span className="mono">01</span>Understand the problem first
              </div>
              <div>
                <span className="mono">02</span>Research users &amp; pain points
              </div>
              <div>
                <span className="mono">03</span>Explore multiple solutions
              </div>
              <div>
                <span className="mono">04</span>Design, test, iterate
              </div>
            </div>
            <div className="stickies" aria-label="Design principles">
              <div className="sticky" tabIndex={0}>
                Every design decision should have a purpose.
                <small>— principle 01</small>
              </div>
              <div className="sticky" tabIndex={0}>
                User needs over aesthetics.
                <small>— principle 02</small>
              </div>
              <div className="sticky" tabIndex={0}>
                Simplicity, clarity &amp; consistency.
                <small>— principle 03</small>
              </div>
              <div className="sticky" tabIndex={0}>
                Create meaningful experiences.
                <small>— principle 04</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
