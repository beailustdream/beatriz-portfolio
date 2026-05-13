import { useContext, lazy, Suspense } from "react"

import {
  motion,
  AnimatePresence
} from "framer-motion"

import {
  SystemContext
} from "../../context/SystemContext"

import GlitchText
  from "../effects/GlitchText"

const DashboardPage = lazy(
  () => import("../pages/DashboardPage")
)
const TerminalPage = lazy(
  () => import("../pages/TerminalPage")
)
const AnalyticsPage = lazy(
  () => import("../pages/AnalyticsPage")
)
const SystemPage = lazy(
  () => import("../pages/SystemPage")
)
const SurveillancePage = lazy(
  () => import("../pages/SurveillancePage")
)
const PerformersPage = lazy(
  () => import("../pages/PerformersPage")
)
const RealityPage = lazy(
  () => import("../pages/RealityPage")
)
const ExitPage = lazy(
  () => import("../pages/ExitPage")
)

export default function MainPanel({
  performerName
}) {

  const { activeTab } =
    useContext(SystemContext)

  const renderPage = () => {

    switch (activeTab) {

      case "Dashboard":
        return (
          <DashboardPage
            performerName={performerName}
          />
        )

      case "Terminal":
        return <TerminalPage />

      case "Analytics":
        return <AnalyticsPage />

      case "System":
        return <SystemPage />

      case "Surveillance":
        return <SurveillancePage />

      case "Performers":
        return <PerformersPage />

      case "Reality":
        return <RealityPage />

      case "Exit":
        return <ExitPage />

      default:
        return (
          <DashboardPage
            performerName={performerName}
          />
        )
    }
  }

  return (
    <div
      style={{
        flex: 1,
        padding: "40px",
        color: "white",
        overflowY: "auto",
        position: "relative"
      }}
    >

      {/* Header */}
      <div
        style={{
          marginBottom: "40px"
        }}
      >

        <GlitchText
          text={activeTab.toUpperCase()}
        />

        <p
          style={{
            color: "#ffb3b3",
            letterSpacing: "2px",
            marginTop: "10px"
          }}
        >
          THE DIGITAL CIRCUS IS
          OPERATING NORMALLY
        </p>

      </div>

      {/* Animated Dynamic Page */}
      <AnimatePresence mode="wait">

        <motion.div

          key={activeTab}

          initial={{
            opacity: 0,
            y: 25,
            scale: 0.98
          }}

          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}

          exit={{
            opacity: 0,
            y: -25,
            scale: 0.98
          }}

          transition={{
            duration: 0.45
          }}
        >

          <Suspense
            fallback={
              <div
                style={{
                  color: "#ffb3b3",
                  fontSize: "18px",
                  padding: "40px"
                }}
              >
                LOADING MODULE...
              </div>
            }
          >
            {renderPage()}
          </Suspense>

        </motion.div>

      </AnimatePresence>

    </div>
  )
}