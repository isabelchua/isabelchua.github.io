


let computerPick = parseInt((Math.random()*3)+1);
const displayP = document.querySelector('#dpick');
let pick = 0;
let winCtr = 0;
let loseCtr = 0;
let win = document.querySelector('.win');
let lose = document.querySelector('.lose');
let draw = document.querySelector('.draw');
let winText1 = document.querySelector('.winText');
let drawCtr = 0;
let numGames = 0;
 
let trial = document.querySelector('#result').innerHTML;


function rockPick(){
 pick = 1;
  displayPick(pick);
}

function paperPick(){
  pick = 2;
   displayPick(pick);
}

function scissorsPick(){
  pick = 3;
   displayPick(pick);
}

function displayPick(pick) {
  if (computerPick == 1) {
    computerValue = 'ROCK';
  } else if (computerPick == 2) {
    computerValue = 'PAPER';
  } else {
    computerValue = 'SCISSORS';
  }
  if (pick == 1) {
    yourValue = 'ROCK';
  } else if (pick == 2) {
    yourValue = 'PAPER';
  } else {
    yourValue = 'SCISSORS';
  }
  //displayP.innerHTML = `<span id="red">${pick}</span>`
  //document.querySelector('#compuP').innerHTML = `<span id="red">${computerPick}</span>`

  addWin();
}

function addWin() {
  if ((pick - computerPick + 3) % 3 == 1) {
    winCtr++;
    win.innerHTML = `<span id="red">${winCtr}</span>`
    winText1.innerHTML = `<h2 id="green">You Won!</h2> You picked ${yourValue}, Computer picked ${computerValue}.`
  } else if ((pick - computerPick + 3) % 3 == 2) {
    loseCtr++;
    lose.innerHTML = `<span id="red">${loseCtr}</span>`
    winText1.innerHTML = `<h2 id="red2">You Lost!</h2> You picked ${yourValue}, Computer picked ${computerValue}.`
  } else {
    drawCtr++;
    draw.innerHTML = `<span id="red">${drawCtr}</span>`
    winText1.innerHTML = `<h2>DRAW!</h2> You both picked ${yourValue}`
  }
  numGames++;
  document.querySelector('.numGames').innerHTML = `<span id="red">${numGames}</span>`
  newGame();
}

function newGame(){
      computerPick = parseInt((Math.random()*3)+1);
     // playGame = true;
  }
