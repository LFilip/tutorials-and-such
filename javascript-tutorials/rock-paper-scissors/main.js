var compChoice = 1;
var playerChoice = 2;
var gameText = "";
var gameCount = 0;
var playerScore = 0;
var compScore = 0;

/*  Rock = 1 Paper = 2 Scissors = 3*/


function computerPlay () {
  compChoice = Math.floor((Math.random() * 3) + 1);
  return compChoice;
}

function getGameText (playerSelection, computerSelection) {
  /**
   1 = Rock
   2 = Paper
   3 = Scissors
  **/

  switch (playerSelection){
    /* Player Picks Rock */
    case 1:
      switch (computerSelection){
        case 1: return "Tie! Rock is Rock"; break;
        case 2: return "Lose, You do! Rock is covered by Paper"; break;
        case 3: return "Win, You do! Rock smashed scissors"; break;
        default: console.log("error"); return;
      }
      break;
    /* Player Picks Paper*/
    case 2:
    switch (computerSelection){
      case 1: return "Win, You do! Paper covers the rock";
      case 2: return "Tie! Paper loves more paper!";
      case 3: return "Lose, You do! Paper is cut all the way up";
      default: console.log("error"); return;
    }
    /* Player Picks Scissors*/
    case 3:
    switch (computerSelection){
      case 1: return "Lose, you do! That rocks SMASHED your darn scissors";
      case 2: return "Win, you do! You cut the paper!";
      case 3: return "Tie! Scissor me timbers";
      default: console.log("error"); return;
    }
     default:
     console.log("error"); return;
  }
}

function game() {
  if (gameCount < 5){

    computerPlay();
    let para = document.querySelector('p')
    let playerChoiceString = prompt("testPrompt");
    playerChoice = parseInt(playerChoiceString);
    let tempString = getGameText(playerChoice, compChoice);


    /* incrementing the winner score */
    switch (tempString.substr(0,1)) {
      case "L": compScore++; break;
      case "W": playerScore++; break;
      default: break;
    }

    console.log(tempString);
    gameCount++;
    game();
  } else {
    console.log("Game Over! Score:  Player - " + playerScore + " : Computer - " + compScore);
  }
}
