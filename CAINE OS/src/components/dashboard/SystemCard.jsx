export default function SystemCard({
  title,
  value,
  color
}) {
  return (
    <div
      style={{
        background: "rgba(30,0,0,0.85)",
        border: `1px solid ${color}`,
        borderRadius: "18px",
        padding: "25px",
        minWidth: "220px",
        boxShadow: `0 0 25px ${color}30`,
        backdropFilter: "blur(10px)"
      }}
    >
      <p
        style={{
          color: "#ffb3b3",
          fontSize: "12px",
          letterSpacing: "3px",
          marginBottom: "15px"
        }}
      >
        {title}
      </p>

      <h1
        style={{
          color,
          fontSize: "42px",
          margin: 0,
          textShadow: `0 0 15px ${color}`
        }}
      >
        {value}
      </h1>
    </div>
  )
}