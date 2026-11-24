import { Dots } from "./Dots";

export function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div className="logo">
          <Dots />
          Divya Salvi
        </div>
        <nav aria-label="Footer">
          <a href="mailto:divyasalvi260@gmail.com">Email</a>
          <a
            href="https://www.linkedin.com/in/divyasalvi891/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </nav>
        <a className="top-btn" href="#top">
          ↑ Back to top
        </a>
      </div>
      <div className="statusbar">
        <div className="wrap">
          <span>
            <span className="g">●</span> Open to full-time
          </span>
          <span>Designed with intention.</span>
          <span>Built with creativity.</span>
          <span className="r">
            <span>portfolio v1.0</span>
            <span>© 2026 Divya Salvi</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
