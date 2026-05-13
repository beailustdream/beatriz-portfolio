import { memo, useEffect, useState } from "react";

function RandomGlitch() {

  const [active, setActive] =
    useState(false);

  useEffect(() => {

    const interval = setInterval(() => {

      setActive(true);

      setTimeout(() => {
        setActive(false);
      }, 220);

    }, Math.random() * 12000 + 8000);

    return () =>
      clearInterval(interval);

  }, []);

  if (!active) return null;

  return (
    <>
      {/* RGB Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "rgba(255,0,0,0.06)",
          mixBlendMode: "screen",
          pointerEvents: "none",
          zIndex: 99998,
          animation:
            "rgbShift 0.2s infinite"
        }}
      />

      {/* Flash */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "rgba(255,255,255,0.03)",
          pointerEvents: "none",
          zIndex: 99997
        }}
      />

      <style>
        {`
          @keyframes rgbShift {
            0% { transform: translate(0px, 0px); }
            20% { transform: translate(-4px, 2px); }
            40% { transform: translate(4px, -2px); }
            60% { transform: translate(-3px, 1px); }
            80% { transform: translate(3px, -1px); }
            100% { transform: translate(0px, 0px); }
          }
        `}
      </style>
    </>
  );
}

export default memo(RandomGlitch);
