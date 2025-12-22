const display = document.getElementById("display");
const pads = document.querySelectorAll(".drum-pad");

function playPad(pad) {
  if (!pad) return;
  const audio = pad.querySelector(".clip");
  if (!audio) return;

  // 1. Reset and Play
  audio.currentTime = 0;
  audio.play();

  // 2. Update Display using data-name
  const name = pad.getAttribute("data-name");
  if (display) display.innerText = name;

  // 3. Visual Feedback
  pad.classList.add("active");
  setTimeout(() => pad.classList.remove("active"), 100);
}

// Click events
pads.forEach((pad) => {
  pad.addEventListener("click", () => playPad(pad));
});

// Keyboard events (Focus on 'keydown')
document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  const audio = document.getElementById(key);

  if (audio) {
    // The test expects the parent .drum-pad to be the focus of the action
    const pad = audio.parentElement;
    playPad(pad);
  }
});
