import { useState } from "react";

export default function LoginScreen({
  onLogin
}) {

  const [name, setName] =
    useState("");

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background:
          "radial-gradient(circle at center, #250000, #000)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Orbitron",
        zIndex: 10000
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
          opacity: 0.12
        }}
      />

      {/* Card */}
      <div
        style={{
          width: "420px",
          background:
            "rgba(15,0,0,0.92)",
          border:
            "1px solid #550000",
          borderRadius: "24px",
          padding: "40px",
          position: "relative",
          zIndex: 1,
          boxShadow:
            "0 0 40px rgba(255,0,0,0.2)"
        }}
      >

        {/* Title */}
        <h1
          style={{
            fontFamily: "Creepster",
            color: "#ff2b2b",
            fontSize: "60px",
            letterSpacing: "8px",
            textAlign: "center",
            marginBottom: "10px",
            textShadow:
              "0 0 20px #ff0000"
          }}
        >
          CAINE
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#ffb3b3",
            letterSpacing: "3px",
            marginBottom: "40px"
          }}
        >
          ENTER THE DIGITAL CIRCUS
        </p>

        {/* Input */}
        <input
          type="text"

          placeholder="PERFORMER NAME"

          value={name}

          onChange={(e) =>
            setName(e.target.value)
          }

          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "14px",
            border:
              "1px solid #660000",
            background:
              "rgba(255,0,0,0.06)",
            color: "white",
            outline: "none",
            fontSize: "14px",
            letterSpacing: "2px",
            marginBottom: "25px",
            boxSizing: "border-box"
          }}
        />

        {/* Button */}
        <button

          onClick={() =>
            onLogin(name || "PERFORMER")
          }

          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "14px",
            border: "none",
            background:
              "linear-gradient(to right, #660000, #ff0000)",
            color: "white",
            fontSize: "14px",
            letterSpacing: "3px",
            cursor: "pointer",
            transition: "0.3s",
            boxShadow:
              "0 0 20px rgba(255,0,0,0.3)"
          }}
        >
          ENTER THE CIRCUS
        </button>

      </div>

    </div>
  )
}