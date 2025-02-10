//define vars
let humanScore = computerScore = 0;
let humanChoice;
let compChoice;
let roundWinner;

//retrives player choice from buttons
document.getElementById("rock").addEventListener("click", () => {
  humanChoice = "rock";
  makeCompChoiceVisible()
  genCompChoice()
  findWinner("rock",compChoice)
  displayWinner()
});
document.getElementById("paper").addEventListener("click", () => {
  humanChoice = "paper";
  makeCompChoiceVisible()
  genCompChoice()
  findWinner("paper",compChoice)
  displayWinner()
});
document.getElementById("scissors").addEventListener("click", () => {
  humanChoice = "scissors";
  makeCompChoiceVisible()
  genCompChoice()
  findWinner("scissors",compChoice)
  displayWinner()
});


//generates the computers choice and hides others
const rockComp = document.getElementById('rockComp');
const paperComp = document.getElementById('paperComp');
const scissorsComp = document.getElementById('scissorsComp');
function genCompChoice() {
    compChoice = Math.floor(Math.random() * 3)
    if (compChoice == 0) {
        compChoice = "rock"
        paperComp.style.visibility = 'hidden';
        scissorsComp.style.visibility = 'hidden';
      } else if (compChoice == 1) {
        compChoice = "paper"
        rockComp.style.visibility = 'hidden';
        scissorsComp.style.visibility = 'hidden';
      } else {
        compChoice = "scissors"
        paperComp.style.visibility = 'hidden';
        rockComp.style.visibility = 'hidden';
      }
}

//makes all comp buttons visible for next round
function makeCompChoiceVisible() {
  rockComp.style.visibility = 'visible';
  paperComp.style.visibility = 'visible';
  scissorsComp.style.visibility = 'visible';
}

//finds winner for the round and updates score
function findWinner(playerChoice, compChoice) {
  if (playerChoice === compChoice) {
      humanScore++;
      computerScore++;
      roundWinner = "tie";
  }
  else if (
      (playerChoice === "rock" && compChoice === "scissors") ||
      (playerChoice === "scissors" && compChoice === "paper") ||
      (playerChoice === "paper" && compChoice === "rock")
  ) {
      humanScore++;
      roundWinner="human";
  } else {
  computerScore++;
  roundWinner="computer";
  }
}

//displays winner after one round
const scoreSection = document.getElementById('scoreDisplay')
function displayWinner() {
  if (roundWinner === "tie"){
    scoreSection.innerHTML = `It was a tie! <br> Human Score: ${humanScore} <br> Computer Score: ${computerScore}`
  }else if (roundWinner === "human") {
    scoreSection.innerHTML = `You Won! <br> Human Score: ${humanScore} <br> Computer Score: ${computerScore}`
  }else{
    scoreSection.innerHTML = `You Lost! <br> Human Score: ${humanScore} <br> Computer Score: ${computerScore}`
  }
}