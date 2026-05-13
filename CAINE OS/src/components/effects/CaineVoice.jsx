import { useEffect } from "react";

export default function CaineVoice({
  performerName
}) {

  useEffect(() => {

    const messages = [

      `Welcome back, ${performerName}.`,

      "The Digital Circus is operating normally.",

      "Escape is not permitted.",

      "Caine is watching you."

    ];

    let current = 0;

    const speak = () => {

      const utterance =
        new SpeechSynthesisUtterance(
          messages[current]
        );

      utterance.rate = 0.92;

      utterance.pitch = 0.7;

      utterance.volume = 0.8;

      speechSynthesis.speak(
        utterance
      );

      current =
        (current + 1) % messages.length;
    };

    speak();

    const interval = setInterval(
      speak,
      18000
    );

    return () => {
      clearInterval(interval);
      speechSynthesis.cancel();
    };

  }, []);

  return null;
}