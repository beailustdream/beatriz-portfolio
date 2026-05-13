// src/components/layout/Sidebar.jsx

import { useContext } from "react";

import {
  SystemContext
} from "../../context/SystemContext";

import {
  playHover,
  playClick
} from "../../../utils/sounds";

export default function Sidebar() {

  const {
    activeTab,
    setActiveTab
  } = useContext(SystemContext);

  const items = [

    "Dashboard",

    "Terminal",

    "Analytics",

    "System",

    "Surveillance",

    "Performers",

    "Reality",

    "Exit"
  ];

  return (
    <div
      style={{
        width: "260px",

        height: "100vh",

        background:
          "rgba(15,0,0,0.92)",

        borderRight:
          "1px solid #550000",

        display: "flex",

        flexDirection: "column",

        padding: "30px 20px",

        boxSizing: "border-box",

        position: "relative",

        overflow: "hidden"
      }}
    >

      {/* Glow */}
      <div
        style={{
          position: "absolute",

          width: "300px",
          height: "300px",

          background: "#ff0000",

          borderRadius: "50%",

          filter: "blur(120px)",

          opacity: 0.08,

          top: "-120px",
          left: "-120px"
        }}
      />

      {/* Logo */}
      <div
        style={{
          marginBottom: "50px",

          zIndex: 2
        }}
      >

        <h1
          style={{
            color: "#ff4d4d",

            fontSize: "42px",

            letterSpacing: "6px",

            fontFamily: "Creepster",

            textShadow:
              "0 0 15px #ff0000"
          }}
        >
          CAINE
        </h1>

        <p
          style={{
            color: "#ffb3b3",

            letterSpacing: "3px",

            marginTop: "-10px",

            fontSize: "12px"
          }}
        >
          DIGITAL CIRCUS OS
        </p>

      </div>

      {/* Menu */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",

          zIndex: 2
        }}
      >

        {items.map((item) => (

          <button
            key={item}
            type="button"
            onMouseEnter={playHover}
            onFocus={(e) => {
              playHover();
              e.currentTarget.style.outline =
                "2px solid #ff4d4d";
              e.currentTarget.style.outlineOffset =
                "2px";
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline =
                "2px solid transparent";
            }}
            onClick={() => {
              playClick();
              setActiveTab(item);
            }}
            aria-current={activeTab === item ? "page" : undefined}
            aria-label={`Abrir ${item}`}
            style={{
              padding: "16px 18px",
              borderRadius: "16px",
              cursor: "pointer",
              transition: "0.25s",
              background:
                activeTab === item
                  ? "rgba(255,0,0,0.18)"
                  : "transparent",
              border:
                activeTab === item
                  ? "1px solid #ff0000"
                  : "1px solid transparent",
              color:
                activeTab === item
                  ? "#ffffff"
                  : "#ff9999",
              letterSpacing: "2px",
              fontSize: "14px",
              boxShadow:
                activeTab === item
                  ? "0 0 20px rgba(255,0,0,0.25)"
                  : "none",
              textAlign: "left",
              outline: "2px solid transparent"
            }}
          >
            {item}
          </button>

        ))}

      </div>

    </div>
  )
}