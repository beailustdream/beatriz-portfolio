import SystemCard from "../dashboard/SystemCard";

export default function DashboardPage() {
  return (
    <div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "40px"
        }}
      >

        <SystemCard
          title="REALITY STABILITY"
          value="97%"
          color="#ff3b3b"
        />

        <SystemCard
          title="PERFORMERS ACTIVE"
          value="06"
          color="#ffffff"
        />

        <SystemCard
          title="SYSTEM CHAOS"
          value="HIGH"
          color="#990000"
        />

      </div>

    </div>
  )
}