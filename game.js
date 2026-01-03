const holes = document.querySelectorAll(".hole");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const startBtn = document.getElementById("startBtn");

let score = 0;
let time = 30;
let moleTimer;
let countdown;

function randomHole() {
  holes.forEach(hole => hole.classList.remove("active"));
  const randomIndex = Math.floor(Math.random() * holes.length);
  holes[randomIndex].classList.add("active");
}

holes.forEach(hole => {
  hole.addEventListener("click", () => {
    if (hole.classList.contains("active")) {
      score++;
      scoreEl.textContent = score;
      hole.classList.remove("active");
    }
  });
});

function startGame() {
  score = 0;
  time = 30;
  scoreEl.textContent = score;
  timeEl.textContent = time;

  clearInterval(moleTimer);
  clearInterval(countdown);

  moleTimer = setInterval(randomHole, 800);

  countdown = setInterval(() => {
    time--;
    timeEl.textContent = time;

    if (time === 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(moleTimer);
  clearInterval(countdown);
  holes.forEach(hole => hole.classList.remove("active"));
  alert("Game Over! Your score: " + score);
}

startBtn.addEventListener("click", startGame);

