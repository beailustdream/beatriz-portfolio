import { performerNames } from "../../data/performers";

export default function PerformersPage() {

  const performers = performerNames;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}
    >

      {performers.map((name, index) => (

        <div
          key={index}

          style={{
            background:
              "rgba(20,0,0,0.92)",
            border:
              "1px solid #550000",
            borderRadius: "18px",
            padding: "24px"
          }}
        >

          <h2
            style={{
              color: "#ff4d4d"
            }}
          >
            {name}
          </h2>

          <p
            style={{
              color: "#ffb3b3"
            }}
          >
            STATUS: STABLE
          </p>

        </div>
      ))}

    </div>
  )
}