let win = 0,
  lose = 0,
  tie = 0,
  updateScore = document.querySelector(".update-score"),
  resultAnswer = document.querySelector(".result-value"),
  showResult = document.querySelector(".result"),
  autoPlayButton = document.querySelector(".auto-play");
// reset the score
function resetScore() {
  (win = 0), (lose = 0), (tie = 0);
  updateScore.textContent = `Win:${win}  Lose:${lose}  Tie:${tie}`;
  resultAnswer.textContent = "";
  showResult.textContent = "";
}
// computer picks its choice
function computerChoice() {
  let computer = Math.random();
  let computerMove = "";

  if (computer > 0 && computer <= 1 / 3) {
    computerMove = "rock";
  } else if (computer > 1 / 3 && computer <= 2 / 3) {
    computerMove = "paper";
  } else if (computer > 2 / 3 && computer <= 1) {
    computerMove = "scissors";
  }
  return computerMove;
}
// auto play the game
let isAutoPlay = false;
let intervalId;
function autoPlay() {
  if (!isAutoPlay) {
    intervalId = setInterval(() => {
      playerMove = computerChoice();
      play(playerMove);
    }, 1000);
    isAutoPlay = true;
    autoPlayButton.textContent = "Stop Play";
  } else {
    clearInterval(intervalId);
    isAutoPlay = false;
    autoPlayButton.textContent = "Auto Play";
  }
}
// key mapping for pc
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r')
    play('rock');
  else if (event.key === 'p')
    play('paper');
  else if (event.key === 's')
    play('scissors');
  else if (event.key === 'a')
    autoPlay();
  else if (event.key === 'q')
    resetScore();
})

// function to play the game
function play(userChoice) {
  let computerMove = computerChoice();
  if (computerMove === userChoice) {
    resultAnswer.innerHTML = `You 
    <img src="${userChoice}-emoji.png" class="move-icon">
    <img src="${computerMove}-emoji.png" class="move-icon">
    Computer
    `;
    showResult.textContent = "Stalemate Draw";
    tie++;
  } else if (
    (computerMove === "rock" && userChoice === "scissors") ||
    (computerMove === "paper" && userChoice === "rock") ||
    (computerMove === "scissors" && userChoice === "paper")
  ) {
    resultAnswer.innerHTML = `You 
    <img src="${userChoice}-emoji.png" class="move-icon">
    <img src="${computerMove}-emoji.png" class="move-icon">
    Computer
    `;
    showResult.textContent = "You Lose";
    lose++;
  } else {
    resultAnswer.innerHTML = `You 
    <img src="${userChoice}-emoji.png" class="move-icon">
    <img src="${computerMove}-emoji.png" class="move-icon">
    Computer
    `;
    showResult.textContent = "You Win";
    win++;
  }
  updateScore.textContent = `Win:${win}  Lose:${lose}  Tie:${tie}`;
}
