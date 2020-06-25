const container = document.querySelector(".container");
const text = document.querySelector("#text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breatheanimation();

function breatheanimation() {
  text.innerHTML = "BREATHE IN dude!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerHTML = "HOLD dude!";
    setTimeout(() => {
      text.innerHTML = "BREATHE out dude!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breatheanimation, totalTime);
