//define vars
let humanScore = computerScore = 0;
let humanChoice;
let compChoice;
let roundWinner;

//retrives player choice from buttons
document.getElementById("rock").addEventListener("click", () => {
  humanChoice = "rock";
  genCompChoice()
  findWinner("rock",compChoice)
});
document.getElementById("paper").addEventListener("click", () => {
  humanChoice = "paper";
  genCompChoice()
  findWinner("paper",compChoice)
});
document.getElementById("scissors").addEventListener("click", () => {
  humanChoice = "scissors";
  genCompChoice()
  findWinner("scissors",compChoice)
});


//generates the computers choice
function genCompChoice() {
    compChoice = Math.floor(Math.random() * 3)
    if (compChoice == 0) {
        compChoice = "rock"
      } else if (compChoice == 1) {
        compChoice = "paper"
      } else {
        compChoice = "scissors"
      }
}

//finds winner for the round and updates score
function findWinner(playerChoice, compChoice) {
  if (playerChoice === compChoice) {
      roundWinner = "tie";
  }
  if (
      (playerChoice === "rock" && compChoice === "scissors") ||
      (playerChoice === "scissors" && compChoice === "paper") ||
      (playerChoice === "paper" && compChoice === "rock")
  ) {
      humanScore++;
      roundWinner="human";
  }
  computerScore++;
  roundWinner="computer";
}

//finds the final winner after 5 rounds
