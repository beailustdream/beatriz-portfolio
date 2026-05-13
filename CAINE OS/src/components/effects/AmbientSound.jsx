import { memo, useEffect, useRef } from "react";

import ambientAudio from "../../assets/audio/ambient.mp3";

function AmbientSound() {

  const audioRef = useRef(null);

  useEffect(() => {

    if (audioRef.current) {

      audioRef.current.volume = 0.15;

      audioRef.current.play().catch(() => {
        console.log(
          "Autoplay bloqueado pelo navegador."
        );
      });

    }

  }, []);

  return (
    <audio
      ref={audioRef}
      src={ambientAudio}
      loop
    />
  );
}

export default memo(AmbientSound);
