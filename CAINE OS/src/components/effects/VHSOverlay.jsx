import { memo } from "react";

function VHSOverlay() {

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
        overflow: "hidden",
        mixBlendMode: "screen"
      }}
    >

      {/* Scanlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            `linear-gradient(
              to bottom,
              transparent 50%,
              rgba(255,255,255,0.03) 50%
            )`,
          backgroundSize: "100% 4px",
          opacity: 0.15
        }}
      />

      {/* VHS Noise */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            `repeating-radial-gradient(
              circle at center,
              rgba(255,255,255,0.02),
              rgba(255,255,255,0.01) 1px,
              transparent 2px
            )`,
          opacity: 0.08,
          animation: "noiseMove 0.2s infinite linear"
        }}
      />

      {/* Flicker */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.015)",
          animation: "flicker 0.12s infinite"
        }}
      />

      {/* RGB Distortion */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderLeft: "2px solid rgba(255,0,0,0.08)",
          borderRight: "2px solid rgba(0,255,255,0.05)",
          animation: "rgbShift 0.15s infinite"
        }}
      />

      <style>
        {`
          @keyframes flicker {
            0% { opacity: 0.03; }
            50% { opacity: 0.06; }
            100% { opacity: 0.03; }
          }

          @keyframes noiseMove {
            from { transform: translateY(0px); }
            to { transform: translateY(4px); }
          }

          @keyframes rgbShift {
            0% { transform: translateX(0px); }
            50% { transform: translateX(1px); }
            100% { transform: translateX(0px); }
          }
        `}
      </style>

    </div>
  )
}

export default memo(VHSOverlay);
