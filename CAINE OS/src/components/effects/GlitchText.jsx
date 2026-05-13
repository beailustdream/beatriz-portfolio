export default function GlitchText({ text }) {
  return (
    <div
      style={{
        position: "relative",
        display: "inline-block"
      }}
    >

      {/* Main */}
      <h1
        style={{
          position: "relative",
          color: "white",
          fontSize: "70px",
          letterSpacing: "8px",
          fontFamily: "Creepster",
          textShadow: "0 0 20px #ff0000",
          animation: "glitch 2s infinite"
        }}
      >
        {text}
      </h1>

      {/* Red Layer */}
      <h1
        style={{
          position: "absolute",
          top: 0,
          left: "2px",
          color: "#ff0000",
          fontSize: "70px",
          letterSpacing: "8px",
          fontFamily: "Creepster",
          opacity: 0.7,
          clipPath: "inset(0 0 45% 0)",
          animation: "glitchRed 1.5s infinite"
        }}
      >
        {text}
      </h1>

      {/* White Layer */}
      <h1
        style={{
          position: "absolute",
          top: 0,
          left: "-2px",
          color: "#ffffff",
          fontSize: "70px",
          letterSpacing: "8px",
          fontFamily: "Creepster",
          opacity: 0.4,
          clipPath: "inset(55% 0 0 0)",
          animation: "glitchWhite 2s infinite"
        }}
      >
        {text}
      </h1>

      <style>
        {`
          @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
          }

          @keyframes glitchRed {
            0% { transform: translate(0); }
            20% { transform: translate(-4px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(3px, 2px); }
            80% { transform: translate(2px, -3px); }
            100% { transform: translate(0); }
          }

          @keyframes glitchWhite {
            0% { transform: translate(0); }
            20% { transform: translate(3px, -2px); }
            40% { transform: translate(2px, 2px); }
            60% { transform: translate(-3px, 2px); }
            80% { transform: translate(-2px, -3px); }
            100% { transform: translate(0); }
          }
        `}
      </style>

    </div>
  )
}