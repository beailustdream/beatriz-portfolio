export default function RealityPage() {

  return (
    <div
      style={{
        background:
          "rgba(15,0,0,0.92)",
        border:
          "1px solid #550000",
        borderRadius: "24px",
        padding: "40px",
        maxWidth: "700px"
      }}
    >

      <h1
        style={{
          color: "#ff2b2b"
        }}
      >
        REALITY MONITOR
      </h1>

      <h2
        style={{
          color: "white",
          marginTop: "30px"
        }}
      >
        STABILITY: 97%
      </h2>

      <div
        style={{
          width: "100%",
          height: "20px",
          background: "#220000",
          borderRadius: "999px",
          overflow: "hidden",
          marginTop: "20px"
        }}
      >

        <div
          style={{
            width: "97%",
            height: "100%",
            background:
              "linear-gradient(to right, #660000, #ff0000)"
          }}
        />

      </div>

    </div>
  )
}