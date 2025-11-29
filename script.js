//your JS code here. If required.
const soundNames = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttonsContainer = document.getElementById("buttons");
let currentAudio = null;

// Create sound buttons
soundNames.forEach(name => {
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.innerText = name;

  btn.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(`./sounds/${name}.mp3`);
    currentAudio.play();
  });

  buttonsContainer.appendChild(btn);
});

// Create stop button
const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.innerText = "stop";

stopBtn.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});

buttonsContainer.appendChild(stopBtn);
