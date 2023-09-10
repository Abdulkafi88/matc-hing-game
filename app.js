const deck = document.querySelector(".deck");
const winContainer = document.querySelector(".win");
const btnReplay = document.querySelector(".replay");
const moveHolder = document.querySelector(".moves");
const starHolder = document.querySelector(".star");
const resetButton = document.querySelector(".refresh");
const movesContainer = document.querySelector(".moves-selector");
const starsList = document.querySelectorAll(".stars");
const startBtn = document.querySelector(".game-start-btn");
const timerContainer = document.querySelector(".timer");
const secondsContainer = document.querySelector(".seconds");
const classList = [
  "fa-html5",
  "fa-html5",
  "fa-css3-alt",
  "fa-css3-alt",
  "fa-js-square",
  "fa-js-square",
  "fa-npm",
  "fa-npm",
  "fa-react",
  "fa-react",
  "fa-node-js",
  "fa-node-js",
  "fa-gulp",
  "fa-gulp",
  "fa-github",
  "fa-github",
];
const filteredList = [
  "fa-html5",
  "fa-css3-alt",
  "fa-js-square",
  "fa-npm",
  "fa-react",
  "fa-node-js",
  "fa-gulp",
  "fa-github",
];

const halfStar = "fas fa-star-half-alt";
const emptyStar = "far fa-star";
let startGame = false;

let time = 0;
let userMove = 0;
startBtn.addEventListener("click", () => {
  games();
});

function games(par, index) {
  startBtn.style.display = "none";
  startGame = true;
  deck.addEventListener("click", (e) => {
    userMove += 1;
    movesContainer.textContent = userMove;
    if (userMove >= 5) {
      starsList.forEach((changeStars, index) => {
        if (
          index === 2 &&
          changeStars.classList.contains("fas", "fa-star", "star-1", "stars")
        ) {
          changeStars.classList.remove("fas", "fa-star", "star-1", "stars");
          changeStars.classList.add("fas", "fa-star-half-alt");
        }

        if (userMove >= 10) {
          starsList.forEach((changeStars, index) => {
            if (
              index === 1 &&
              changeStars.classList.contains(
                "fas",
                "fa-star",
                "star-2",
                "stars"
              )
            ) {
              changeStars.classList.remove("fas", "fa-star", "star-2", "stars");
              changeStars.classList.add("fas", "fa-star-half-alt");
            }
          });
        }
        if (userMove >= 15) {
          starsList.forEach((changeStars, index) => {
            if (
              index === 0 &&
              changeStars.classList.contains(
                "fas",
                "fa-star",
                "star-3",
                "stars"
              )
            ) {
              changeStars.classList.remove("fas", "fa-star", "star-3", "stars");
              changeStars.classList.add("fas", "fa-star-half-alt");
            }
          });
        }
        if (userMove === 20) {
          starsList.forEach((changeStars, index) => {
            if (changeStars.classList.contains("fas", "fa-star-half-alt")) {
              changeStars.classList.remove("fas", "fa-star-half-alt");
              changeStars.classList.add("far", "fa-star");
            }
          });
        }
      });
    }
  });

  setInterval(() => {
    time += 1;
    timerContainer.textContent = time;
  }, 1000);
}
