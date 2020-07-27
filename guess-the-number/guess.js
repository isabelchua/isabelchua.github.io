let randomNumber = parseInt((Math.random()*30)+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.res');
const lowOrHi = document.querySelector('.lowOrHi');
const errorMes = document.querySelector('.errorMes');

//const lowOrHi2 = document.querySelector('.lowOrHi2');

const p = document.createElement('p');
let previousGuesses = [];
let numGuesses = 1;
let playGame = true;
let numberFinal = 5;


if (playGame){
  subt.addEventListener('click', function(e){
      e.preventDefault();
      //User input
      const guess = parseInt(userInput.value);
      validateGuess(guess);
  });
}

function validateGuess(guess){
  if (isNaN(guess)){
    displayError('<span id="red">Please enter a valid number</span>');
  } else if (guess < 1) {
    displayError(`Please enter a number greater than 1!`);
  } else if (guess > 30){
    displayError(`Please enter a number lower than 30!`);
  } else {
      //record the number of guesses
      displayError('');
            previousGuesses.push(guess);
      //game over
      if ((numGuesses === numberFinal)&&(guess != randomNumber)) {
          displayGuesses(guess);
          displayMessage(`Sorry! The number was <span id="red">${randomNumber}</span>`);
          endGame();
      } else {
      //Display guessed numbers
      displayGuesses(guess);
      //Check guess and display if wrong
      checkGuess(guess);
      }
  }
}

function checkGuess(guess){
  //show if guess is too high or too low
  if (guess === randomNumber){
      displayMessage('<span id="red">'+ guess + `</span> is Correct, Congratulations!`);
      endGame();
  } else if (guess < randomNumber) {
      displayMessage(`<h2 id="hi">Higher!</h2>`);
  } else if (guess > randomNumber) {
      displayMessage(`<h2 id="lo">Lower!</h2>`);
  }
}

function displayGuesses(guess){
  userInput.value = '';
  guessSlot.innerHTML += `<span id="gBubble">${guess}  </span>`;
  numGuesses++;
  remaining.innerHTML = `${numberFinal - (numGuesses)+1}  `;
}

function displayMessage(message){

      lowOrHi.innerHTML = `<h2 id="hiLo">${message}</h2>`
    //lowOrHi2.innerHTML = `<h2 id="hiLo">${randomNumber}</h2>`

}

function displayError(errorm) {
  errorMes.innerHTML = `<span id="red">${errorm}</span>`
}

function endGame(){
  //Clear user input
  userInput.value = '';
  //Disable button


      submit.classList.add("disabled");
      //disableLetter(letterValue);
 

  userInput.setAttribute('disabled', '');
  //Display Start new Game Button
        p.innerHTML = `<h1 id="newGame">TRY AGAIN</h1>`
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(){
      //Starting a new game
      randomNumber = parseInt((Math.random()*30)+1);
      previousGuesses = [];
      //subth.classList.add('guessSubmit');
      numGuesses = 1;
      submit.classList.remove("disabled");
      guessSlot.innerHTML = '';
      lowOrHi.innerHTML = '';
      remaining.innerHTML = `${numberFinal - numGuesses}  `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
      playGame = true;
  })
}