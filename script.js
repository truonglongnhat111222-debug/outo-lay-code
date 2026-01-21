const TOTAL_TIME = 60;
let timeLeft = TOTAL_TIME;

const timeEl = document.getElementById("time");
const codeEl = document.getElementById("code");
const progressCircle = document.querySelector(".progress");

const radius = 100;
const circumference = 2 * Math.PI * radius;
progressCircle.style.strokeDasharray = circumference;

// Lưu mã đã tạo (localStorage)
let usedCodes = JSON.parse(localStorage.getItem("usedCodes")) || [];

function generateUniqueCode() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code;

  do {
    code = "";
    for (let i = 0; i < 6; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
  } while (usedCodes.includes(code));

  usedCodes.push(code);
  localStorage.setItem("usedCodes", JSON.stringify(usedCodes));

  return code;
}

function resetTimer() {
  timeLeft = TOTAL_TIME;
  codeEl.textContent = generateUniqueCode();
}

function updateTimer() {
  timeEl.textContent = timeLeft;

  const offset = circumference - (timeLeft / TOTAL_TIME) * circumference;
  progressCircle.style.strokeDashoffset = offset;

  timeLeft--;

  if (timeLeft < 0) {
    resetTimer();
  }
}

// Khởi động
resetTimer();
setInterval(updateTimer, 1000);
