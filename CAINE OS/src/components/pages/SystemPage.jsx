import { useContext } from "react";

import { SystemContext } from "../../context/SystemContext";

export default function SystemPage() {
  const {
    soundEnabled,
    setSoundEnabled,
    effectsEnabled,
    setEffectsEnabled
  } = useContext(SystemContext);

  return (
    <div
      style={{
        background: "rgba(15,0,0,0.92)",
        padding: "30px",
        borderRadius: "20px",
        border: "1px solid #550000",
        maxWidth: "700px"
      }}
    >

      <h1
        style={{
          color: "#ff2b2b",
          marginBottom: "20px"
        }}
      >
        CAINE SYSTEM
      </h1>

      <div
        style={{
          display: "grid",
          gap: "16px",
          marginBottom: "24px"
        }}
      >
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#ffb3b3",
            fontSize: "14px"
          }}
        >
          <input
            type="checkbox"
            checked={soundEnabled}
            onChange={() => setSoundEnabled((value) => !value)}
            style={{
              width: "18px",
              height: "18px",
              accentColor: "#ff4d4d"
            }}
          />
          Som ambiente e voz
        </label>

        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#ffb3b3",
            fontSize: "14px"
          }}
        >
          <input
            type="checkbox"
            checked={effectsEnabled}
            onChange={() => setEffectsEnabled((value) => !value)}
            style={{
              width: "18px",
              height: "18px",
              accentColor: "#ff4d4d"
            }}
          />
          Efeitos visuais
        </label>
      </div>

      <p style={{ color: "#ffb3b3" }}>
        STATUS: ACTIVE
      </p>

      <p style={{ color: "#ffb3b3" }}>
        REALITY ENGINE: STABLE
      </p>

      <p style={{ color: "#ffb3b3" }}>
        ESCAPE POSSIBILITY: DENIED
      </p>

      <p style={{ color: "#ffb3b3" }}>
        HAPPINESS ENFORCEMENT: ENABLED
      </p>

    </div>
  )
}