


let computerPick = parseInt((Math.random()*3)+1);
let displayPick = document.querySelector('displayPick');
let pick = 0;
document.getElementById("demo").style.color = "red";
let playGame = true;

// if (playGame){
//   rock.addEventListener('click', function(e){
//       e.preventDefault();
//       //User input
//       const pick = parseInt(userInput.value);
//       validatePick(pick);
//   });
// }

function rockPick(){
  // pick = 1;
  // //displayPick(pick);
  // displayPick.innerHTML = `<span id="red">${pick}</span>`
  // document.querySelector('#result').innerHTML = pick;

}

function myFunction() {
  document.getElementById("demo").style.color = "red";
}

displayPick(pick);

function displayPick(pick) {
  displayPick.innerHTML = `<span id="red">${pick}</span>`
}

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');

const lowOrHi = document.querySelector('.lowOrHi');
