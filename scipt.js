const TOTAL_TIME = 60;
let timeLeft = TOTAL_TIME;

const timeEl = document.getElementById("time");
const codeEl = document.getElementById("code");
const progressCircle = document.querySelector(".progress");

const circumference = 2 * Math.PI * 100;
progressCircle.style.strokeDasharray = circumference;

function generateCode() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

function reset() {
  timeLeft = TOTAL_TIME;
  codeEl.textContent = generateCode();
}

function update() {
  timeEl.textContent = timeLeft;

  const offset = circumference - (timeLeft / TOTAL_TIME) * circumference;
  progressCircle.style.strokeDashoffset = offset;

  timeLeft--;

  if (timeLeft < 0) {
    reset();
  }
}

reset();
setInterval(update, 1000);
