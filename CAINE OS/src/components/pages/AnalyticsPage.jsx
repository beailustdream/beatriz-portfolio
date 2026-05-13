export default function AnalyticsPage() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
      }}
    >

      <div
        style={{
          background: "rgba(20,0,0,0.9)",
          padding: "30px",
          borderRadius: "20px",
          border: "1px solid #550000",
          minWidth: "250px"
        }}
      >
        <h2 style={{ color: "#ff4d4d" }}>
          ERROR RATE
        </h2>

        <h1 style={{ color: "white" }}>
          12%
        </h1>
      </div>

      <div
        style={{
          background: "rgba(20,0,0,0.9)",
          padding: "30px",
          borderRadius: "20px",
          border: "1px solid #550000",
          minWidth: "250px"
        }}
      >
        <h2 style={{ color: "#ff4d4d" }}>
          INSANITY LEVEL
        </h2>

        <h1 style={{ color: "white" }}>
          CRITICAL
        </h1>
      </div>

    </div>
  )
}