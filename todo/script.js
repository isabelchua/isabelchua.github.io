function todoList() {
  var item = document.getElementById("todoInput").value;
  var errorMes = document.querySelector(".errorMes");
  if ( item === ''){
      errorMes.innerHTML = `<span id="red">Please enter a task</span>`
  }
  else {
    var text = document.createTextNode(item)
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("todoList").appendChild(newItem)

    document.getElementById("todoInput").value = '';
    errorMes.innerHTML = '';
    }

}