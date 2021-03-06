//assign variables
var btnAdd = document.getElementById("btnAdd");

const clear = document.getElementById("clear");
const list = document.getElementById("list");

const CHECK = "check-circle";
const UNCHECK = "uncheck";
const LINETHR = "LINETHR";

let todoLIST, id;

let storageTodo = localStorage.getItem("RECIPE_LIST");

//check if todoLIST is empty or not
if (storageTodo) {
  todoLIST = JSON.parse(storageTodo);
  id = todoLIST.length; // id is on the last of the todo list
  loadTodo(todoLIST); // load todo 
} else {
  // if storageTodo isn't empty
  todoLIST = [];
  id = 0;
}

// load items to the user's interface
function loadTodo(array){
  array.forEach(function(todoValue){
      addToDo(todoValue.name, todoValue.id, todoValue.checkValue, todoValue.trash);
  });
}

// clicking add button will go to addtolist function
btnAdd.addEventListener("click", addToList);

// pressing Enter key will add to list
document.addEventListener("keyup",function(event){
  if(event.keyCode == 13){
    addToList();
  }
});

const input = document.getElementById('todoInput');

function addToList() {
  const todoInput = input.value;
  var errorMes = document.querySelector(".errorMes");

      //check if empty
      if (!todoInput){
        errorMes.innerHTML = `<span id="red">Please enter a task</span>`
      }
      else {
        addToDo(todoInput, desc, id, false, false);

        todoLIST.push({
          name : todoInput,
          description: desc,
          id : id,
          checkValue : false,
          trash : false
        });
  
  // add input to localstorage 
  localStorage.setItem("RECIPE_LIST", JSON.stringify(todoLIST));
  id++;
  }

  document.getElementById('todoInput').value = "";
}

//display list of TODOs
function addToDo(todoInput, desc, id, checkValue, trash){
    
  if(trash){ return; }
  
  const checkOrUncheck = checkValue ? CHECK : UNCHECK;
  const LINE = checkValue ? LINETHR : "";
  
  const listValue = `<li class="item">
                    <span class="inlb ${checkOrUncheck}" che="checkValue" id="${id}"></span>
                    <span class="inlb text ${LINE}">${todoInput}</span>
                    <span class="right trash" che="removeValue" id="${id}"></span></li>`;
  
  const addToEndList = "beforeend";
  list.insertAdjacentHTML(addToEndList, listValue);
}

// clear localstorage
clear.addEventListener("click", function(){
  localStorage.clear();
  location.reload();
});

// check list
function checkTodo(clickedElement){
  clickedElement.classList.toggle(CHECK);
  clickedElement.classList.toggle(UNCHECK);
  clickedElement.parentNode.querySelector(".text").classList.toggle(LINETHR);
  
  todoLIST[clickedElement.id].checkValue = todoLIST[clickedElement.id].checkValue ? false : true;
}

// delete list
function removeToDo(clickedElement){
  clickedElement.parentNode.parentNode.removeChild(clickedElement.parentNode);
  
  todoLIST[clickedElement.id].trash = true;
}

// eventlistener for the list
list.addEventListener("click", function(event){
  const clickedElement = event.target; // return the clicked clickedElement inside list
  const elementJob = clickedElement.attributes.che.value; // check or uncheck or trash
  // var errorMes2 = document.querySelector(".errorMes2");
  // errorMes2.innerHTML = clickedElement;
  if (elementJob == "checkValue") {
      checkTodo(clickedElement);
  } else if (elementJob == "removeValue") {
      removeToDo(clickedElement);
  }
  
  // add input to localstorage
  localStorage.setItem("todoLIST", JSON.stringify(todoLIST));
});

