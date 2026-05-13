import hoverSound
from "../src/assets/audio/hover.mp3";

import clickSound
from "../src/assets/audio/click.mp3";

import glitchSound
from "../src/assets/audio/glitch.mp3";

export function playHover() {

  const audio =
    new Audio(hoverSound);

  audio.volume = 0.25;

  audio.play();
}

export function playClick() {

  const audio =
    new Audio(clickSound);

  audio.volume = 0.35;

  audio.play();
}

export function playGlitch() {

  const audio =
    new Audio(glitchSound);

  audio.volume = 0.5;

  audio.play();
}