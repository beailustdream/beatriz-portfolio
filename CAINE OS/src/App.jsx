import { useState, useContext } from "react"

import {
  SystemContext
} from "./context/SystemContext"

import Sidebar from "./components/layout/Sidebar"
import MainPanel from "./components/layout/MainPanel"

import CorruptionOverlay from "./components/effects/CorruptionOverlay"
import ParticlesBackground from "./components/effects/ParticlesBackground"
import VHSOverlay from "./components/effects/VHSOverlay"
import CaineEye from "./components/effects/CaineEye"
import AmbientSound from "./components/effects/AmbientSound"
import CustomCursor from "./components/effects/CustomCursor"
import CaineVoice from "./components/effects/CaineVoice"
import RandomGlitch from "./components/effects/RandomGlitch"

import BootScreen from "./components/system/BootScreen"
import SystemPopup from "./components/system/SystemPopup"
import LoginScreen from "./components/system/LoginScreen"

export default function App() {

  const {
    corrupted,
    soundEnabled,
    effectsEnabled
  } = useContext(SystemContext)

  const [bootFinished, setBootFinished] =
    useState(false)

  const [loggedIn, setLoggedIn] =
    useState(false)

  const [performerName, setPerformerName] =
    useState("")

  /* LOGIN SCREEN */
  if (!loggedIn) {
    return (
      <LoginScreen
        onLogin={(name) => {
          setPerformerName(name)
          setLoggedIn(true)
        }}
      />
    )
  }

  /* BOOT SCREEN */
  if (!bootFinished) {
    return (
      <BootScreen
        onFinish={() =>
          setBootFinished(true)
        }
      />
    )
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        overflow: "hidden",

        background: corrupted
          ? "radial-gradient(circle at top, #ff0000, #000000)"
          : "radial-gradient(circle at top, #3b0000, #050505)",

        fontFamily: "Orbitron, sans-serif",

        position: "relative",

        cursor: "none",

        animation: corrupted
          ? "corruptShake 0.08s infinite"
          : "none"
      }}
    >

      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          background: "#ff0000",
          borderRadius: "50%",
          filter: "blur(180px)",
          opacity: 0.08,
          top: "-200px",
          right: "-200px",
          zIndex: 0
        }}
      />

      {/* Noise Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.12) 50%)",
          backgroundSize: "100% 4px",
          zIndex: 1
        }}
      />

      {/* Particles */}
      {effectsEnabled && <ParticlesBackground />}

      {/* Main Layout */}
      <div
        style={{
          display: "flex",
          width: "100%",
          zIndex: 2
        }}
      >
        <Sidebar />

        <MainPanel
          performerName={performerName}
        />
      </div>

      {/* CAINE Assistant */}
      {effectsEnabled && <CaineEye />}

      {/* VHS Overlay */}
      {effectsEnabled && <VHSOverlay />}

      {/* Corruption Overlay */}
      {effectsEnabled && <CorruptionOverlay />}

      {/* Random Glitches */}
      {effectsEnabled && <RandomGlitch />}

      {/* System Popup */}
      <SystemPopup />

      {/* Ambient Audio */}
      {soundEnabled && <AmbientSound />}

      {/* CAINE Voice */}
      {soundEnabled && (
        <CaineVoice
          performerName={performerName}
        />
      )}

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Corruption Animation */}
      <style>
        {`
          @keyframes corruptShake {

            0% {
              transform:
                translate(0px, 0px);
            }

            25% {
              transform:
                translate(-2px, 2px);
            }

            50% {
              transform:
                translate(2px, -2px);
            }

            75% {
              transform:
                translate(-2px, -2px);
            }

            100% {
              transform:
                translate(0px, 0px);
            }

          }
        `}
      </style>

    </div>
  )
}