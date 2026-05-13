import {
  useEffect,
  useState
} from "react";

export default function BootScreen({
  onFinish
}) {

  const lines = [

    "CAINE OS v3.4.9",

    "Initializing Reality Engine...",

    "Loading Performers...",

    "Connecting Surveillance Cameras...",

    "Scanning Consciousness...",

    "WARNING:// Instability detected.",

    "Launching Digital Circus..."
  ];

  const [visibleLines,
    setVisibleLines] =
    useState([]);

  useEffect(() => {

    let index = 0;

    const interval =
      setInterval(() => {

        setVisibleLines(prev => [
          ...prev,
          lines[index]
        ]);

        index++;

        if (index >= lines.length) {

          clearInterval(interval);

          setTimeout(() => {
            onFinish();
          }, 2000);
        }

      }, 900);

    return () =>
      clearInterval(interval);

  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",

        background:
          "radial-gradient(circle, #180000, #000)",

        color: "#ff3c3c",

        display: "flex",
        flexDirection: "column",

        justifyContent: "center",

        alignItems: "center",

        fontFamily: "monospace",

        overflow: "hidden",

        position: "relative"
      }}
    >

      {/* Glow */}
      <div
        style={{
          position: "absolute",

          width: "500px",
          height: "500px",

          background: "#ff0000",

          borderRadius: "50%",

          filter: "blur(180px)",

          opacity: 0.15
        }}
      />

      {/* Title */}
      <h1
        style={{
          fontSize: "72px",

          letterSpacing: "12px",

          marginBottom: "50px",

          fontFamily: "Creepster",

          textShadow:
            "0 0 25px #ff0000",

          zIndex: 2
        }}
      >
        CAINE
      </h1>

      {/* Terminal */}
      <div
        style={{
          width: "700px",

          background:
            "rgba(10,0,0,0.88)",

          border:
            "1px solid #550000",

          borderRadius: "20px",

          padding: "30px",

          boxShadow:
            "0 0 30px rgba(255,0,0,0.2)",

          zIndex: 2
        }}
      >

        {visibleLines.map(
          (line, index) => (

          <div
            key={index}

            style={{
              marginBottom: "16px",

              letterSpacing: "2px",

              animation:
                "fadeIn 0.4s ease"
            }}
          >
            {">"} {line}
          </div>

        ))}

        {/* Loading Bar */}
        <div
          style={{
            marginTop: "30px",

            width: "100%",
            height: "10px",

            background:
              "rgba(255,255,255,0.08)",

            borderRadius: "999px",

            overflow: "hidden"
          }}
        >

          <div
            style={{
              width: "100%",

              height: "100%",

              background:
                "linear-gradient(to right, #ff0000, #ff6666)",

              animation:
                "loading 7s linear"
            }}
          />

        </div>

      </div>

      {/* Scanlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,

          backgroundImage:
            `
            linear-gradient(
              to bottom,
              transparent 50%,
              rgba(255,255,255,0.03) 50%
            )
            `,

          backgroundSize: "100% 4px",

          opacity: 0.15,

          pointerEvents: "none"
        }}
      />

      <style>
        {`

          @keyframes loading {

            from {
              width: 0%;
            }

            to {
              width: 100%;
            }

          }

          @keyframes fadeIn {

            from {
              opacity: 0;
              transform:
                translateY(10px);
            }

            to {
              opacity: 1;
              transform:
                translateY(0px);
            }

          }

        `}
      </style>

    </div>
  )
}