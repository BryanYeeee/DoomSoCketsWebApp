"use client";

import { useRef, useState } from "react";

const ttydUrl = "https://seasonal-limit-beef-patrick.trycloudflare.com";

export default function TtydConsole() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [src, setSrc] = useState(ttydUrl);
  const [message, setMessage] = useState("");

  function reloadTtyd(action: "login" | "logout") {
    setMessage(
      action === "login"
        ? "Reloading ttyd. Enter credentials in the browser prompt."
        : "Session cleared from this frame. Browser-cached credentials may require a new tab to change.",
    );
    setSrc("about:blank");
    window.setTimeout(() => setSrc(ttydUrl), 50);
  }

  async function toggleFullscreen() {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    await frameRef.current?.requestFullscreen();
  }

  return (
    <>
      <div className="terminal-frame" ref={frameRef}>
        <div className="terminal-toolbar">
          <span className="terminal-toolbar-title">
            DOOMSOCKETS // COMBAT CONSOLE
          </span>
          <span className="connection-status status-connected">
            <span className="status-dot" aria-hidden="true" />
            TTYD UPLINK
          </span>
        </div>
        <iframe
          className="terminal-iframe"
          src={src}
          title="DoomSoCkets ttyd game terminal"
          allow="fullscreen; clipboard-read; clipboard-write"
          allowFullScreen
          loading="eager"
          referrerPolicy="no-referrer"
          tabIndex={0}
        />
      </div>
      <div className="console-controls">
        <button type="button" onClick={() => reloadTtyd("login")}>
          LOGIN / RECONNECT
        </button>
        <button type="button" onClick={() => reloadTtyd("logout")}>
          LOG OUT
        </button>
        <button type="button" onClick={toggleFullscreen}>
          FULLSCREEN
        </button>
      </div>
      {message && (
        <p className="auth-note" role="status">
          {message}
        </p>
      )}
    </>
  );
}
