//define vars
let humanScore = computerScore = 0;
let humanChoice;
let compChoice;
let roundWinner;

//start game
playGame()

//plays 5 rounds
function playGame() {
    playRound()
    console.log(compChoice)
    playRound()
    console.log(compChoice)
    playRound()
    console.log(compChoice)
    playRound()
    console.log(compChoice)
    playRound()
    console.log(compChoice)
    findWinner()
}

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

//gets the humans choice
function getplayerchoice() {
    humanChoice = prompt("Choose rock, paper, or scissors")
    humanChoice = humanChoice.toLowerCase()
  }

//finds winner for the round and updates score
function playRound() {
    getplayerchoice()
    genCompChoice()
    if (humanChoice == "rock") {
        switch (compChoice) {
          case "rock": 
            alert ("tie");
            break;
          case "paper":
            alert ("you lost");
            computerScore++
            break;
          case "scissors":
            alert("you won");
            humanScore++
            break;
        }
      } else if (humanChoice == "paper") {
          switch (compChoice) {
            case "rock": 
              alert ("you won");
              humanScore++
              break;
            case "paper":
              alert ("tie");
              break;
            case "scissors":
              alert("you lost");
              computerScore++
              break;
          }
      } else {
        switch (compChoice) {
          case "rock": 
            alert ("you lost");
            computerScore++
            break;
          case "paper":
            alert ("you won");
            humanScore++
            break;
          case "scissors":
            alert("tie");
            break;
      }
    }
}

//finds the final winner after 5 rounds
function findWinner() {
    if (humanScore > computerScore){
        alert (`You won! ${humanScore} to ${computerScore}!`)
    } else {
        alert (`You Lost! ${humanScore} to ${computerScore}!`)
    }

}