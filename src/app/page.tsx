import TtydConsole from "./TtydConsole";

export default function Home() {
  return (
    <main className="command-center">
      <header className="site-header">
        <a className="brand" href="/" aria-label="DoomSoCkets home">
          <strong>DOOMSOCKETS</strong>
        </a>
        <div className="header-meta">
          <span>Bryan Yee</span>
        </div>
      </header>

      <section className="hero">
        <div>
          <h1>
            <span>ENTER THE</span>
            <em>ARENA.</em>
          </h1>
          <p className="hero-description">
            Multiplayer Doom running in command line. Built in C.
          </p>
          <div className="hero-rule" />
        </div>
        <div className="how-to-play">
          <p className="controls-title">HOW TO PLAY</p>
          <div className="controls-list">
            <div className="control-row">
              <span className="keycap">W A S D</span>
              <span>MOVE</span>
            </div>
            <div className="control-row">
              <span className="keycap">E</span>
              <span>SWITCH GUN</span>
            </div>
            <div className="control-row">
              <span className="keycap">SPACE</span>
              <span>SHOOT</span>
            </div>
            <div className="control-row">
              <span className="keycap">K / L</span>
              <span>LOOK LEFT / RIGHT</span>
            </div>
            <div className="control-row">
              <span className="keycap">M</span>
              <span>OPEN MAP</span>
            </div>
            <div className="control-row">
              <span className="keycap">Q</span>
              <span>QUIT</span>
            </div>
          </div>
          <div className="game-rules">
            <p>GET A KILL. GET A NEW GUN.</p>
            <strong>FIRST TO 10 KILLS WINS.</strong>
          </div>
        </div>
      </section>

      <section className="game-section" aria-labelledby="console-title">
        <div className="section-heading">
          <h2 id="console-title">COMBAT CONSOLE</h2>
        </div>
        <TtydConsole />
        <p className="auth-note">
          TTYD LOGIN REQUIRED
        </p>
      </section>

      <footer className="site-footer">
        <span>DOOMSOCKETS</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
