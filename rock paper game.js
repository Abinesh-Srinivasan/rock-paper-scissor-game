let win = 0,
  lose = 0,
  tie = 0;
let updateScore = document.querySelector(".update-score");
let resultAnswer = document.querySelector(".result-value");
let showResult=document.querySelector(".result")
function resetScore() {
  (win = 0), (lose = 0), (tie = 0);
  updateScore.textContent = `Win:${win}  Lose:${lose}  Tie:${tie}`;
  resultAnswer.textContent = "";
  showResult.textContent=""
}
function play(userChoice) {
  let computer = Math.random();
  let computerMove = "";

  if (computer > 0 && computer <= 1 / 3) {
    computerMove = "rock";
  } else if (computer > 1 / 3 && computer <= 2 / 3) {
    computerMove = "paper";
  } else if (computer > 2 / 3 && computer <= 1) {
    computerMove = "scissors";
  }
  if (computerMove === userChoice) {
    resultAnswer.innerHTML = `You 
    <img src="${userChoice}-emoji.png" class="move-icon">
    <img src="${computerMove}-emoji.png" class="move-icon">
    Computer
    `;
    showResult.textContent="Stalemate Draw"
    tie++;
    //alert(`You picked ${userChoice}. computeruter picked ${computerMove}. It's a tie!`);
  } else if (
    (computerMove === "rock" && userChoice === "scissors") ||
    (computerMove === "paper" && userChoice === "rock") ||
    (computerMove === "scissors" && userChoice === "paper")
  ) {
    resultAnswer.innerHTML = `You 
    <img src="${userChoice}-emoji.png" class="move-icon">
    <img src="${computerMove}-emoji.png" class="move-icon">
    Computer
    `
    showResult.textContent = "You Lose";
    lose++;
    //alert(`You picked ${userChoice}. computeruter picked ${computerMove}. You lose!`);
  } else {
    resultAnswer.innerHTML = `You 
    <img src="${userChoice}-emoji.png" class="move-icon">
    <img src="${computerMove}-emoji.png" class="move-icon">
    Computer
    `;
    showResult.textContent = "You Win";
    win++;
    //alert(`You picked ${userChoice}. computeruter picked ${computerMove}. You win!`);
  }
  updateScore.textContent = `Win:${win}  Lose:${lose}  Tie:${tie}`;
}
