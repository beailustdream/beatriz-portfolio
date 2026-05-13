import { memo, useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {

  const particlesInit = useCallback(async (main) => {
    await loadFull(main);
  }, []);

  const options = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },

    fpsLimit: 45,

    particles: {
      color: {
        value: ["#ff0000", "#ffffff", "#660000"],
      },

      links: {
        enable: false,
      },

      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: true,
        speed: 0.6,
        straight: false,
      },

      number: {
        density: {
          enable: true,
        },
        value: 35,
      },

      opacity: {
        value: 0.3,
      },

      shape: {
        type: "circle",
      },

      size: {
        value: {
          min: 1,
          max: 4,
        },
      },
    },

    detectRetina: false,
  }), []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0
      }}
    />
  );
}

export default memo(ParticlesBackground);
