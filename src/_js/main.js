const audio8bit = document.querySelector("#audio8bit");
const btnaudio8bit = document.querySelector("#btnAudio8bit");

const audioOriginal = document.querySelector("#audioOriginal");
const btnAudioOriginal = document.querySelector("#btnAudioOriginal");

const btnShowDetails = document.querySelector("#btnShowDetails");

btnaudio8bit.addEventListener("click", () => {
  if (audio8bit.paused) {
    audio8bit.play();
    btnaudio8bit.innerText = "Pauze 8bit song";
  } else {
    audio8bit.pause();
    btnaudio8bit.innerText = "Continue 8bit song";
  }
});

btnAudioOriginal.addEventListener("click", () => {
  if (audioOriginal.paused) {
    audioOriginal.play();
    btnAudioOriginal.innerText = "Pauze original song";
  } else {
    audioOriginal.pause();
    btnAudioOriginal.innerText = "Continue original song";
  }
});

btnShowDetails.addEventListener("click", () => {
  btnShowDetails.style.display = "none";
  const answer = document.querySelector("#answer");
  const video8bit = document.querySelector("#video8bit");
  answer.style.display = "block";
  video8bit.play();
});
