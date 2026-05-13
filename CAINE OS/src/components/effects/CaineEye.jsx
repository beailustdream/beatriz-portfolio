import { memo, useEffect, useRef } from "react";

import caineImage from "../../assets/images/caine.png";

function CaineEye() {

  const imageRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {

    const handleMouseMove = (e) => {

      const x =
        (e.clientX / window.innerWidth - 0.5) * 20;

      const y =
        (e.clientY / window.innerHeight - 0.5) * 20;

      if (frameRef.current !== null) return;

      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;

        if (imageRef.current) {
          imageRef.current.style.transform =
            `translate3d(${x}px, ${y}px, 0)`;
        }
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };

  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 997,
        pointerEvents: "none"
      }}
    >

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          width: "220px",
          height: "220px",
          background: "#ff0000",
          borderRadius: "50%",
          filter: "blur(80px)",
          opacity: 0.2,
          top: "50%",
          left: "50%",
          transform:
            "translate(-50%, -50%)"
        }}
      />

      {/* CAINE */}
      <img
        ref={imageRef}
        src={caineImage}
        alt="Caine"
        style={{
          width: "180px",
          transform: "translate3d(0, 0, 0)",
          transition:
            "transform 0.08s linear",
          filter:
            "drop-shadow(0 0 25px rgba(255,0,0,0.5))",
          willChange: "transform"
        }}
      />

    </div>
  );
}

export default memo(CaineEye);
