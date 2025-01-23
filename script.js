"use strict";

const playAgain = document.querySelector(".play-again");
const check = document.querySelector(".check");
const score = document.getElementById("score");
const hiddenContent = document.querySelector(".content");
const lose = document.querySelector(".losing");
const defaultCTR = document.querySelector(".default__content");
let chances = document.querySelector(".chance");
let RandomNumber = Math.floor(Math.random() * 20 + 1);

let TotalScore = 0;
let chance = 5;
let ActiveRound = true;

const wrong = function () {
  hiddenContent.style.display = "flex";
  hiddenContent.style.backgroundColor = "#ff7f7f";
  chances.textContent = chance -= 1;
};

check.addEventListener("click", function () {
  const inputnum = document.getElementById("number").value;
  // WHEN NO NUMBER IS INPUTED
  if (!inputnum) {
    wrong();
    hiddenContent.textContent = "No Number⚠️";

    // WHEN PLAYER WINS
  } else if (RandomNumber == inputnum) {
    hiddenContent.style.backgroundColor = "#32cd32";
    hiddenContent.textContent = "Correct! Well done!🎉";
    if (ActiveRound) {
      score.textContent = TotalScore += 1;
      ActiveRound = false;
    }

    // WHEN GUESSED WRONG

    // TOO HIGH
  } else {
    if (inputnum > RandomNumber) {
      wrong();
      hiddenContent.textContent = "TOO HIGH. Try again⚠️";

      // TOO LOW
    } else {
      wrong();
      hiddenContent.textContent = "TOO LOW. Try again⚠️";
    }
  }

  // WHEN USER LOSE
  if (chance === 0) {
    defaultCTR.style.display = "none";
    lose.classList.remove("hidden");
    document.querySelector(".secret").textContent = RandomNumber;
    if (score.textContent > 0) {
      score.textContent = TotalScore -= 1;
    }
  }
});

// PLAY AGAIN BUTTON
playAgain.addEventListener("click", function () {
  chance = 5;
  ActiveRound = true;
  RandomNumber = Math.floor(Math.random() * 20 + 1);
  hiddenContent.style.display = "none";
  defaultCTR.style.display = "block";
  lose.classList.add("hidden");
  chances.textContent = chance;
  document.getElementById("number").value = "";
});
