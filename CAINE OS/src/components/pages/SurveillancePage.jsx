import { performerCameras } from "../../data/performers";

export default function SurveillancePage() {

  const cameras = performerCameras;

  return (
    <div
      style={{
        display: "grid",

        gridTemplateColumns:
          "repeat(auto-fit, minmax(320px, 1fr))",

        gap: "24px"
      }}
    >

      {cameras.map((cam, index) => (

        <div
          key={index}

          style={{
            background:
              "rgba(10,0,0,0.96)",

            border:
              "1px solid #550000",

            borderRadius: "20px",

            overflow: "hidden",

            position: "relative",

            height: "260px",

            boxShadow:
              "0 0 30px rgba(255,0,0,0.18)"
          }}
        >

          {/* Background */}
          <div
            style={{
              position: "absolute",
              inset: 0,

              background:
                `
                radial-gradient(
                  circle at center,
                  rgba(255,0,0,0.08),
                  rgba(0,0,0,0.92)
                )
                `
            }}
          />

          {/* Character */}
          <img
            src={cam.image}

            alt={cam.name}

            style={{
              position: "absolute",

              right: "20px",
              bottom: "0px",

              height: "180px",

              objectFit: "contain",

              filter:
                `
                drop-shadow(
                  0 0 20px rgba(255,0,0,0.45)
                )
                `
            }}
          />

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
                  rgba(255,255,255,0.05) 50%
                )
                `,

              backgroundSize:
                "100% 4px",

              opacity: 0.2
            }}
          />

          {/* Camera Label */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "14px",

              color: "#ff4d4d",

              fontSize: "13px",

              letterSpacing: "3px"
            }}
          >
            CAMERA {index + 1}
          </div>

          {/* REC */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              right: "14px",

              color: "#ff4d4d",

              fontSize: "12px",

              letterSpacing: "2px"
            }}
          >
            ● REC
          </div>

          {/* Performer Name */}
          <div
            style={{
              position: "absolute",

              left: "14px",
              bottom: "40px",

              color: "#ffffff",

              fontSize: "22px",

              letterSpacing: "3px",

              textShadow:
                "0 0 10px #ff0000"
            }}
          >
            {cam.name}
          </div>

          {/* ONLINE */}
          <div
            style={{
              position: "absolute",

              bottom: "14px",
              right: "14px",

              color: "#66ff66",

              fontSize: "11px",

              letterSpacing: "2px"
            }}
          >
            ONLINE
          </div>

        </div>
      ))}

    </div>
  )
}