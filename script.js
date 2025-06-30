// This function allows the user to create a new task and adds it to the existing list

const currentTasks = document.getElementById("tasklist"); // Takes the existing tasks
const newListItem = document.createElement("li"); // Creates a new list item

function addNewTask() {
    let inputValue = document.getElementById("taskInput").value;
    let newVar = newListItem.createTextNode(inputValue);
    addedTask = currentTasks.appendChild(newVar);


}

document.getElementById("addButton").addEventListener("click",addNewTask);