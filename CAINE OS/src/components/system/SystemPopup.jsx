import { useEffect, useState } from "react";

export default function SystemPopup() {

  const messages = [
    "REALITY FAILURE DETECTED",
    "DO NOT TRUST THE EXIT",
    "CAINE IS WATCHING YOU",
    "SYSTEM CORRUPTION FOUND",
    "HAPPINESS IS MANDATORY",
    "ESCAPE DENIED"
  ];

  const [visible, setVisible] =
    useState(false);

  const [message, setMessage] =
    useState("");

  useEffect(() => {

    const interval = setInterval(() => {

      const randomMessage =
        messages[
          Math.floor(
            Math.random() * messages.length
          )
        ];

      setMessage(randomMessage);

      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 3000);

    }, 12000);

    return () =>
      clearInterval(interval);

  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "40px",
        right: "40px",
        background:
          "rgba(20,0,0,0.96)",
        border: "1px solid #ff0000",
        padding: "20px 30px",
        borderRadius: "16px",
        color: "#ff4d4d",
        zIndex: 9999,
        boxShadow:
          "0 0 40px rgba(255,0,0,0.4)",
        animation:
          "popup-glitch 0.4s ease"
      }}
    >

      <h2
        style={{
          margin: 0,
          letterSpacing: "3px"
        }}
      >
        {message}
      </h2>

      <style>
        {`
          @keyframes popup-glitch {

            0% {
              transform:
                translateX(100px);
              opacity: 0;
            }

            100% {
              transform:
                translateX(0);
              opacity: 1;
            }

          }
        `}
      </style>

    </div>
  )
}