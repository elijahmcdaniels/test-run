// This function allows the user to create a new task and adds it to the existing list



function addNewTask() {
    const currentTasks = document.getElementById("tasklist"); // Takes the existing tasks
    const newListItem = document.createElement("li"); // Creates a new list item
    let inputValue = document.getElementById("taskInput").value; // Takes value of input box
    let text = document.createTextNode(inputValue);
    let newTask = newListItem.appendChild(text); // Appends value of input box to list item
    currentTasks.appendChild(newTask)
}

const button = document.getElementById("addButton")
button.addEventListener("click", addNewTask); 