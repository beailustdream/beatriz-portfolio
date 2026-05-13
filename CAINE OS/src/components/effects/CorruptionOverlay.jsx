import { memo, useEffect, useState } from "react";

function CorruptionOverlay() {

  const [active, setActive] = useState(false);

  useEffect(() => {

    const interval = setInterval(() => {

      setActive(true);

      setTimeout(() => {
        setActive(false);
      }, 150);

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  if (!active) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background:
          "linear-gradient(to bottom, rgba(255,0,0,0.12), transparent)",
        mixBlendMode: "screen",
        pointerEvents: "none",
        zIndex: 999,
        animation: "corrupt 0.15s infinite"
      }}
    >

      <style>
        {`
          @keyframes corrupt {
            0% { transform: translate(0); opacity: 0.4; }
            25% { transform: translate(-10px, 5px); opacity: 0.8; }
            50% { transform: translate(8px, -5px); opacity: 0.5; }
            75% { transform: translate(-5px, -2px); opacity: 0.9; }
            100% { transform: translate(0); opacity: 0.4; }
          }
        `}
      </style>

    </div>
  )
}

export default memo(CorruptionOverlay);
