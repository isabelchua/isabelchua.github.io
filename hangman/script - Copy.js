





var words = ["DOG", "ELEPHANT", "ZEBRA", "OCTOPUS", "LION", "TIGER"];
let rand = parseInt((Math.random()*words.length));
console.log(rand);
//var words = { "word": ["dog", "cat"]};
var numberOfGuessLeft = 10;
var letterGuess;

const displayhtmlLetters = document.getElementById("displayLetters");
const startOver = document.querySelector('.res');

let playGame = true;
const submit = document.querySelector('#subt');


//var displayLetters = document.getElementById("displayLetters");


let storageTodo = localStorage.getItem("TODO_LIST");

var i = "";
var displayLetters = { "letters":
                ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R","S", "T", "U", "V", "W", "X", "Y", "Z"]}

for (i in displayLetters.letters) {
  const listValue = `<span class="letterOuter"><a class='letterButton' id="${displayLetters.letters[i]}" job="${displayLetters.letters[i]}" href="#" disabled>${displayLetters.letters[i]}</a></span>`;

  const addToEndList = "beforeend";
  displayhtmlLetters.insertAdjacentHTML(addToEndList, listValue);
}

var displayWord2 = document.getElementById("displayWord2");
var displayWord = document.getElementById("displayWord");
const errorM = document.getElementById("errorM");

//var theLetters = words[0].substring(1,1);
//words[0].indexOf(letterPressed);

var blankShow = [];

for (let i = 0; i < words[rand].length ; i++) {
  blankShow[i] = " _ ";
  console.log(blankShow[i]);
}

var winCTR = 0;

//used letter
//var usedLetter = [];

let usedLetter2 = [];

var ctr = 0;
//check to see which letter was clicked
displayhtmlLetters.addEventListener("click", function(event) {
 // event.preventDefault();
  const letterPressed = event.target // return the clicked clickLetter inside list
  const letterValue = letterPressed.attributes.job.value; // the letter of pressed
  
  //usedLetter[ctr] = letterValue;
  usedLetter2.push(letterValue);
  
  //check to see is letter was already used
  for ( let i = 0 ; i < usedLetter2.length; i++ ){
    console.log("guess letter " + usedLetter2[i]);
    if (usedLetter2[i] == letterValue){
      displayWord2.innerHTML = letterValue + "is already used";
    }
  }

  //if pressed letter is in the word
  if (words[rand].indexOf(letterValue) !== -1) {

    //check to see if letter pressed is in the WORD
    for ( let i = 0 ; i < words[rand].length ; i++ ) {
      if (letterValue == words[rand].charAt(i)){
        winCTR++;
        console.log("number of right guesses " + winCTR);
        console.log("word length is " + (words[rand].length)-1);
        blankShow[i] = letterValue;
        //if counter reaches same length with word
        if (winCTR > ((words[rand].length)-1)) {
          winGAME();
        }
      }
      else {

      }
    }
  } else {
    numberOfGuessLeft--;
    errorM.innerHTML = `<h3>NUMBER OF GUESSES LEFT: ${numberOfGuessLeft}</h3>`;
    if (numberOfGuessLeft <= 0) {
      endGAME();
    }
  }

  ctr++;
  //refresh display WORD
  displayWord.innerHTML = "";
  displayWordFunction();

});


function displayWordFunction() {
  for (let i = 0; i < words[rand].length ; i++) {
    const listValue = `<span class="left space"> ${blankShow[i]} </span>`;
 
    const addToEndList = "beforeend";
    displayWord.insertAdjacentHTML(addToEndList, listValue);
  }
}



function endGAME() {
  // print game over
  displayWord2.innerHTML = "dd";
  // for (let i = 0; i < words[rand].length ; i++) {
  //   const listValue = `<span class="left space"> ${words[rand].charAt(i)} </span>`;
 
  //   const addToEndList = "beforeend";
  //   displayWord.insertAdjacentHTML(addToEndList, listValue);
  // }
  displayWord.innerHTML = "dd";
  errorM.innerHTML = `<h1 class="red">GAME OVER a ${numberOfGuessLeft}</h1>`;
}



function winGAME() {
  // print game over
  errorM.innerHTML = `<h1 class="red">YOU GUESSED THE WORD!</h1>`;
  //put play again button
}

function newGame(){
      displayWord.innerHTML = "";
      errorM.innerHTML = "";
      //Starting a new game
      rand = parseInt((Math.random()*words.length));
      numberOfGuessLeft = 10;
      winCTR = 0;
      blankShow = [];
      ctr =0;
      usedLetter2 = [];

      for (let i = 0; i < words[rand].length ; i++) {
        blankShow[i] = " _ ";
      }
      displayWordFunction();
}