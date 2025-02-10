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
  checkFinalWinner()
});
document.getElementById("paper").addEventListener("click", () => {
  humanChoice = "paper";
  makeCompChoiceVisible()
  genCompChoice()
  findWinner("paper",compChoice)
  displayWinner()
  checkFinalWinner()
});
document.getElementById("scissors").addEventListener("click", () => {
  humanChoice = "scissors";
  makeCompChoiceVisible()
  genCompChoice()
  findWinner("scissors",compChoice)
  displayWinner()
  checkFinalWinner()
});


//generates the computers choice and hides others
const rockCompButton = document.getElementById('rockCompButton');
const paperCompButton = document.getElementById('paperCompButton');
const scissorsCompButton = document.getElementById('scissorsCompButton');
const rockComp = document.getElementById('rockComp');
const paperComp = document.getElementById('paperComp');
const scissorsComp = document.getElementById('scissorsComp');
function genCompChoice() {
    compChoice = Math.floor(Math.random() * 3)
    if (compChoice == 0) {
        compChoice = "rock"
        paperComp.style.visibility = 'hidden';
        scissorsComp.style.visibility = 'hidden';
        paperCompButton.disabled = true
        scissorsCompButton.disabled = true
      } else if (compChoice == 1) {
        compChoice = "paper"
        rockComp.style.visibility = 'hidden';
        scissorsComp.style.visibility = 'hidden';
        rockCompButton.disabled = true
        scissorsCompButton.disabled = true
      } else {
        compChoice = "scissors"
        paperComp.style.visibility = 'hidden';
        rockComp.style.visibility = 'hidden';
        paperCompButton.disabled = true
        rockCompButton.disabled = true
      }
}

//makes all comp buttons visible for next round
function makeCompChoiceVisible() {
  rockComp.style.visibility = 'visible';
  paperComp.style.visibility = 'visible';
  scissorsComp.style.visibility = 'visible';
  rockCompButton.disabled = false;
  paperCompButton.disabled = false;
  scissorsCompButton.disabled = false;
}

//finds winner for the round and updates score
function findWinner(playerChoice, compChoice) {
  if (playerChoice === compChoice) {
      humanScore++
      computerScore++
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

//checks if anyone has a score of 5 & disables buttons
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
function checkFinalWinner() {
  if (humanScore === 5 || computerScore === 5){
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    if (humanScore === computerScore) {
      scoreSection.innerHTML = `Tie game! <br>`
      resetButton()
    } else if (humanScore > computerScore) {
      scoreSection.innerHTML = `Congrats Champ, You Won! <br>`
      resetButton()
    } else {
      scoreSection.innerHTML = `Bested by the computer, You Lost! <br>`
      resetButton()
    }
  }
}

function resetButton() {
  scoreSection.innerHTML+='<button onClick="reset()" id="resetButton">Play Again!</button>'
}

function reset() {
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  makeCompChoiceVisible()
  humanScore = computerScore = 0
  scoreSection.innerHTML = ''
}