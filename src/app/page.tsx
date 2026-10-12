import type { CSSProperties } from "react";
import TtydConsole from "./TtydConsole";

const GITHUB_URL = "https://github.com/faiiyad/DoomSoCkets";

const controls = [
  { key: "WASD", action: "Move" },
  { key: "E", action: "Switch gun" },
  { key: "Space", action: "Shoot" },
  { key: "K / L", action: "Look left / right" },
  { key: "M", action: "Open map" },
  { key: "Q", action: "Quit" },
];

/* ───── Footer fire: three layers of flame tongues, generated once ───── */
const W = 1440;
const BASE = 245;

const rnd = (i: number, s: number) => {
  const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453;
  return x - Math.floor(x);
};

type Flame = { d: string; style: CSSProperties };

function makeLayer(
  n: number,
  seed: number,
  wMin: number,
  wMax: number,
  hMin: number,
  hMax: number,
  speed: number,
): Flame[] {
  const step = (W + 80) / n;
  return Array.from({ length: n }, (_, i) => {
    const cx = Math.round(-40 + step * (i + 0.5) + (rnd(i, seed) - 0.5) * step * 0.6);
    const w = Math.round(wMin + rnd(i, seed + 1) * (wMax - wMin));
    const h = Math.round(hMin + rnd(i, seed + 2) * (hMax - hMin));
    const lean = Math.round((rnd(i, seed + 3) - 0.5) * w * 0.9);
    const d =
      `M${cx - w} ${BASE}` +
      `C${cx - w} ${BASE - h * 0.5} ${cx - w * 0.25 + lean * 0.4} ${BASE - h * 0.62} ${cx + lean} ${BASE - h}` +
      `C${cx + w * 0.25 + lean * 0.4} ${BASE - h * 0.62} ${cx + w} ${BASE - h * 0.5} ${cx + w} ${BASE}Z`;
    const dur = ((0.6 + rnd(i, seed + 4) * 0.8) * speed).toFixed(2);
    const delay = (-rnd(i, seed + 5) * 2).toFixed(2);
    return {
      d,
      style: { "--d": `${dur}s`, "--delay": `${delay}s` } as CSSProperties,
    };
  });
}

const backFlames = makeLayer(14, 1, 85, 115, 140, 235, 1.4);
const midFlames = makeLayer(20, 2, 55, 78, 95, 165, 1.1);
const frontFlames = makeLayer(28, 3, 38, 56, 50, 105, 0.85);

function GithubMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="command-center">
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="embers" aria-hidden="true" />

        <header className="site-header">
          <a className="brand" href="/" aria-label="DoomSoCkets home">
            <strong>DOOMSOCKETS</strong>
          </a>
          <div className="header-meta">
            <span>Bryan Yee</span>
          </div>
        </header>

        <div className="hero-body">
          <h1 className="logo">DoomSockets</h1>
          <p className="hero-description">
            Multiplayer Doom running in command line. Built in C.
          </p>
          <a className="play-button" href="#console">
            Enter the arena
          </a>
        </div>

        {/* Jagged ridgelines, rim-lit by the fire behind them */}
        <div className="ridges" aria-hidden="true">
          <svg
            className="ridge ridge-back"
            viewBox="0 0 1440 360"
            preserveAspectRatio="none"
          >
            <polygon
              fill="#2a0704"
              points="0,360 0,215 60,160 130,95 175,40 215,70 300,95 370,125 420,150 470,105 520,85 560,40 600,110 650,190 720,160 800,205 880,150 960,95 1040,55 1085,85 1140,125 1200,95 1265,20 1300,45 1360,100 1420,150 1440,175 1440,360"
            />
            <polyline
              fill="none"
              stroke="#ff7a2a"
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
              points="0,215 60,160 130,95 175,40 215,70 300,95 370,125 420,150 470,105 520,85 560,40 600,110 650,190 720,160 800,205 880,150 960,95 1040,55 1085,85 1140,125 1200,95 1265,20 1300,45 1360,100 1420,150 1440,175"
            />
          </svg>
          <svg
            className="ridge ridge-front"
            viewBox="0 0 1440 360"
            preserveAspectRatio="none"
          >
            <polygon
              fill="#0b0302"
              points="0,360 0,250 70,225 140,190 210,225 300,245 400,215 470,250 580,270 680,300 770,280 870,255 960,282 1060,240 1150,205 1220,235 1300,200 1370,170 1410,210 1440,230 1440,360"
            />
          </svg>
        </div>
      </section>

      <div className="lower">
        <section className="how-section" aria-labelledby="how-title">
          <h2 id="how-title">How To Play</h2>
          <div className="hud">
            <div className="hud-cell hud-goal">
              <span className="keycap">C</span>
              <span className="hud-label">Connect to Server</span>
            </div>

            <div className="controls-list">
              {controls.map((c) => (
                <div className="control-row" key={c.key}>
                  <span className="keycap">{c.key}</span>
                  <span>{c.action}</span>
                </div>
              ))}
            </div>

            <div className="hud-cell hud-rule">
              <p>Get a kill. Get a new gun.</p>
              <strong>First to 10 kills wins.</strong>
            </div>
          </div>
        </section>

        <section id="console" className="game-section" aria-labelledby="console-title">
          <div className="section-heading">
            <h2 id="console-title">Combat Console</h2>
          </div>
          <TtydConsole />
          <p className="auth-note">ttyd login required</p>
        </section>

                
        <footer className="site-footer relative mt-8">
        <section className="source-section absolute z-10 left-1/2 top-0 -translate-x-1/2 w-4/5" aria-labelledby="source-title">
          <div className="source-plate">
            <div className="source-inner">
              <GithubMark className="source-mark" />
              <div className="source-copy">
                <h2 id="source-title">Read The Source</h2>
                <p>
                  Every line of the game is open on GitHub:{" "}
                  <span className="repo">faiiyad/DoomSoCkets</span>
                </p>
              </div>
              <a
                className="play-button github-link"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubMark />
                View on GitHub
              </a>
            </div>
          </div>
        </section>
          <div className="footer-glow" aria-hidden="true" />
          <div className="embers" aria-hidden="true" />

          <svg
            className="fire"
            viewBox="0 0 1440 240"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="fireBack" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="245">
                <stop offset="0" stopColor="#8c1e06" />
                <stop offset="1" stopColor="#e0560f" />
              </linearGradient>
              <linearGradient id="fireMid" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="245">
                <stop offset="0" stopColor="#e0560f" />
                <stop offset="1" stopColor="#ffa22b" />
              </linearGradient>
              <linearGradient id="fireFront" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="245">
                <stop offset="0" stopColor="#ff9a2a" />
                <stop offset="1" stopColor="#ffe27a" />
              </linearGradient>
              <linearGradient id="fireBase" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#ffe27a" />
                <stop offset="1" stopColor="#fff3b0" />
              </linearGradient>
            </defs>
            <g fill="url(#fireBack)">
              {backFlames.map((f, i) => (
                <path key={i} className="flame" d={f.d} style={f.style} />
              ))}
            </g>
            <g fill="url(#fireMid)">
              {midFlames.map((f, i) => (
                <path key={i} className="flame" d={f.d} style={f.style} />
              ))}
            </g>
            <g fill="url(#fireFront)">
              {frontFlames.map((f, i) => (
                <path key={i} className="flame" d={f.d} style={f.style} />
              ))}
            </g>
            {/* <rect x="0" y="212" width="1440" height="30" fill="url(#fireBase)" /> */}
          </svg>

          {/* <div className="footer-bar">
            <div className="footer-inner">
              <span>DOOMSOCKETS</span>
              <span>© 2026</span>
            </div>
          </div> */}
        </footer>
      </div>
    </main>
  );
}