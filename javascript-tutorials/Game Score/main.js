var numberOfPlayers;
var players = [];
var submitBtn;
var playerToUpdate;



function addPlayers(){
  for (i = 0; i < numberOfPlayers;i++){
    let newPlayer = {};
    newPlayer.name = prompt("Please enter a name for this player", "Johnson");
    newPlayer.score = 0;
    players.push(newPlayer);
  }
  console.table(players);
  createPlayerDivs();
}

function createPlayerDivs(){
  let playersDiv = document.querySelector(".players");
  playersDiv.innerHTML = "";
  for (i=0;i<numberOfPlayers;i++){
    let newPlayerDiv = document.createElement('div');
    newPlayerDiv.innerHTML = "<div class='name'> " +
                             players[i].name +
                             "</div>" +
                             "<div class='score" + i.toString() + "'>" +
                             "0" +
                             "</div>";

    newPlayerDiv.classList.add("player");
    newPlayerDiv.addEventListener("click", addPoints);
    newPlayerDiv.index = i;
    playersDiv.appendChild(newPlayerDiv);
  }
}

function addPoints(evt){
  let string = ".score" + evt.target.index.toString();
  let playerScore = document.querySelector(string);
  let addedNumberTemp = prompt("Enter how many points they got!", "0");
  let addedNumber = parseInt(addedNumberTemp);
  let oldNumTemp = playerScore.textContent;
  let oldNum = parseInt(oldNumTemp);

  let newNum = oldNum + addedNumber;
  playerScore.textContent = newNum;

}

function selectNumber() {
    let numberField = document.querySelector(".numberOfPlayers");
    numberOfPlayers = parseInt(numberField.value);
    addPlayers();
}


function setListeners() {
    console.log("initiailizing Listeners");
  submitBtn = document.querySelector(".selectBtn");
  submitBtn.addEventListener("click",selectNumber);
}
