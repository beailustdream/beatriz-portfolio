import { memo, useEffect, useRef } from "react";

function CustomCursor() {

  const dotRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {

    const handleMouseMove = (e) => {

      if (frameRef.current !== null) return;

      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;

        const x = e.clientX;
        const y = e.clientY;

        if (dotRef.current) {
          dotRef.current.style.transform =
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
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "#ff0000",
          pointerEvents: "none",
          zIndex: 99999,
          boxShadow: "0 0 16px #ff0000",
          transform: "translate3d(-6px, -6px, 0)",
          transition: "transform 0.04s linear",
          willChange: "transform"
        }}
      />
    </>
  );
}

export default memo(CustomCursor);
