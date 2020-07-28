var words = ["DOG", "ELEPHANT", "ZEBRA", "OCTOPUS", "LION", "TIGER", "TURTLE", "BEAR", "SNAKE", "WOLF", "CROCODILE", "CAMEL", "CHICKEN", "SHARK"];
let rand = parseInt((Math.random() * words.length));

var numberOfGuessLeft = 7;
var letterGuess;

const displayhtmlLetters = document.getElementById("displayLetters");
const startOver = document.querySelector('.res');

let playGame = true;
const submit = document.querySelector('#subt');

//var displayLetters = document.getElementById("displayLetters");

let storageTodo = localStorage.getItem("TODO_LIST");

var i = "";
var displayLetters = {
  "letters": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
}

var removeDisabled;

for (i in displayLetters.letters) {

  const theWORD = `<span class="letterOuter"><a class='letterButton' id="${displayLetters.letters[i]}" job="${displayLetters.letters[i]}" href="#">${displayLetters.letters[i]}</a></span>`;

  const refreshWORD = "beforeend";
  displayhtmlLetters.insertAdjacentHTML(refreshWORD, theWORD);
}

var displayWord2 = document.getElementById("displayWord2");
var displayWord = document.getElementById("displayWord");
const errorM = document.getElementById("errorM");

var gameOVER = false;

//showing of blank letters 
var blankShow = [];

for (let i = 0; i < words[rand].length; i++) {
  blankShow[i] = " _ ";
  console.log(blankShow[i]);
}

var winCTR = 0;

let usedLetter2 = [];

var ctr = 0;
//check to see which letter was clicked
displayhtmlLetters.addEventListener("click", function (event) {
  try {
    event.preventDefault();
    displayWord2.innerHTML = ``;
    if (gameOVER == true) {
      return;
    }
    const letterPressed = event.target // return the clicked clickLetter inside list
    const letterValue = letterPressed.attributes.job.value; // the letter of pressed

    //pressed letter!
    usedLetter2.push(letterValue);

    if (letterValue) {
      var disabled = document.getElementById(letterValue);
      disabled.classList.add("disabled");
      //disableLetter(letterValue);
    }

    //check to see is letter was already used
    for (let i = 0; i < (usedLetter2.length) - 1; i++) {
      //console.log("guess letter " + usedLetter2[i]);
      if (usedLetter2[i] == letterValue) {
        displayWord2.innerHTML = `<span class="red">` + letterValue + " was already used!</span>";
        //exit 
        return;
      }
    }

    //if pressed letter is in the word
    if (words[rand].indexOf(letterValue) !== -1) {

      //check to see if letter pressed is in the WORD
      for (let i = 0; i < words[rand].length; i++) {
        if (letterValue == words[rand].charAt(i)) {
          winCTR++;
          //console.log("number of right guesses " + winCTR);
          //console.log("word length is " + (words[rand].length)-1);
          blankShow[i] = letterValue;
          //if counter reaches same length with word
          if (winCTR > ((words[rand].length) - 1)) {
            winGAME();
          }
        }
      }
    } else {
      numberOfGuessLeft--;
      errorM.innerHTML = `NUMBER OF GUESSES LEFT: ${numberOfGuessLeft}`;
      if (numberOfGuessLeft <= 0) {
        endGAME();
        return;
      }
    }
    ctr++;
    //refresh display WORD
    displayWord.innerHTML = "";
    displayWordFunction();
  } catch (e) {}
});

//show the hangman word
function displayWordFunction() {
  for (let i = 0; i < words[rand].length; i++) {
    const theWORD = `<span class="left space"> ${blankShow[i]} </span>`;

    const refreshWORD = "beforeend";
    displayWord.insertAdjacentHTML(refreshWORD, theWORD);
  }
}

function endGAME() {
  errorM.innerHTML = `<h1 class="red">GAME OVER!<br>The word was ${words[rand]}!</h1>`;
  gameOVER = true;
}

function winGAME() {
  // print game over
  errorM.innerHTML = `<h1 class="red">YOU GUESSED THE WORD!</h1>`;
  gameOVER = true;
}

function newGame() {
  displayWord.innerHTML = "";
  errorM.innerHTML = "";
  //Starting a new game
  rand = parseInt((Math.random() * words.length));
  numberOfGuessLeft = 10;
  winCTR = 0;
  blankShow = [];
  ctr = 0;
  usedLetter2 = [];
  gameOVER = false;
  for (let i = 0; i < words[rand].length; i++) {
    blankShow[i] = " _ ";
  }
  for (i in displayLetters.letters) {
    removeDisabled = document.getElementById(displayLetters.letters[i]);
    removeDisabled.classList.remove("disabled");
  }
  displayWordFunction();
}