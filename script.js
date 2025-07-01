// This function allows the user to create a new task and adds it to the existing list

const currentTasks = document.getElementById("tasklist"); // Takes the existing tasks
const newListItem = document.createElement("li"); // Creates a new list item

function addNewTask() {
    let inputValue = currentTasks.value; // Takes value of input box
    let newTask = newListItem.textContent(inputValue); // Appends value of input box to list item
    currentTasks.appendChild(newTask)
}

const button = document.getElementById("addButton")
button.addEventListener("click", addNewTask);