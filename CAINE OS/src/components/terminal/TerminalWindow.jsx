import {
  useState,
  useEffect,
  useRef,
  useContext
} from "react";

import {
  SystemContext
} from "../../context/SystemContext";

import { performerNames } from "../../data/performers";

export default function TerminalWindow() {

  const {
    corrupted,
    setCorrupted
  } = useContext(SystemContext);

  const [history, setHistory] =
    useState([
      "CAINE:// Welcome back, performer.",
      "Type 'help' for commands."
    ]);

  const [input, setInput] =
    useState("");

  const terminalEndRef =
    useRef(null);

  useEffect(() => {

    terminalEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });

  }, [history]);

  const commands = {

    help: [
      "AVAILABLE COMMANDS:",
      "help",
      "caine",
      "performers",
      "reality",
      "escape",
      "corrupt",
      "restore",
      "clear"
    ],

    caine: [
      "CAINE:// The circus is eternal."
    ],

    performers: [
      "ACTIVE PERFORMERS:",
      ...performerNames
    ],

    reality: [
      "REALITY STABILITY: 97%"
    ],

    escape: [
      "ESCAPE REQUEST DENIED."
    ]
  };

  const handleCommand = () => {

    if (!input.trim()) return;

    const command =
      input.toLowerCase();

    let newHistory = [
      ...history,
      `> ${input}`
    ];

    /* CLEAR */

    if (command === "clear") {

      setHistory([]);

      setInput("");

      return;
    }

    /* CORRUPT MODE */

    if (command === "corrupt") {

      setCorrupted(true);

      newHistory.push(
        "WARNING:// SYSTEM CORRUPTION DETECTED."
      );

      newHistory.push(
        "CAINE:// DO NOT PANIC."
      );

      setHistory(newHistory);

      setInput("");

      return;
    }

    /* RESTORE */

    if (command === "restore") {

      setCorrupted(false);

      newHistory.push(
        "SYSTEM:// Stability restored."
      );

      setHistory(newHistory);

      setInput("");

      return;
    }

    /* NORMAL COMMANDS */

    if (commands[command]) {

      newHistory = [
        ...newHistory,
        ...commands[command]
      ];

    } else {

      newHistory.push(
        "UNKNOWN COMMAND."
      );
    }

    setHistory(newHistory);

    setInput("");
  };

  return (
    <div
      style={{
        background: corrupted
          ? "rgba(35,0,0,0.98)"
          : "rgba(10,0,0,0.94)",

        border: corrupted
          ? "1px solid #ff0000"
          : "1px solid #550000",

        borderRadius: "20px",

        padding: "25px",

        height: "600px",

        overflowY: "auto",

        color: corrupted
          ? "#ff0000"
          : "#ff4d4d",

        fontFamily: "monospace",

        boxShadow: corrupted
          ? "0 0 50px rgba(255,0,0,0.45)"
          : "0 0 30px rgba(255,0,0,0.18)",

        transition: "0.4s"
      }}
    >

      {/* Header */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "20px"
        }}
      >

        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "#ff4d4d"
          }}
        />

        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "#ffffff"
          }}
        />

        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "#660000"
          }}
        />

      </div>

      {/* Output */}
      <div
        role="log"
        aria-live="polite"
        aria-label="Terminal output"
        style={{
          minHeight: "480px",
          lineHeight: "30px",
          letterSpacing: "1px"
        }}
      >

        {history.map((line, index) => (

          <div
            key={index}

            style={{
              textShadow: corrupted
                ? "0 0 8px #ff0000"
                : "none"
            }}
          >
            {line}
          </div>

        ))}

        <div ref={terminalEndRef} />

      </div>

      {/* Input */}
      <div
        style={{
          display: "flex",
          marginTop: "20px"
        }}
      >

        <span
          style={{
            marginRight: "10px"
          }}
        >
          {">"}
        </span>

        <input

          value={input}

          onChange={(e) =>
            setInput(e.target.value)
          }

          onKeyDown={(e) => {

            if (e.key === "Enter") {
              handleCommand();
            }

          }}

          autoFocus
          aria-label="Comando do terminal"
          placeholder="Digite um comando"
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",

            color: corrupted
              ? "#ff0000"
              : "#ff4d4d",

            fontFamily: "monospace",

            fontSize: "16px"
          }}
        />

      </div>

    </div>
  )
}