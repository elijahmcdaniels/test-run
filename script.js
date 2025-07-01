// This function allows the user to create a new task
function addNewTask() {
    const currentTasks = document.getElementById("tasklist"); // Takes the existing tasks
    const newListItem = document.createElement("li"); // Creates a new list item
    let inputValue = document.getElementById("taskInput").value; // Takes value of input box
    
    let text = document.createTextNode(inputValue);
    let newTask = newListItem.appendChild(text); // Appends value of input box to list item
    
    currentTasks.appendChild(newListItem);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("click", () => {
        newListItem.classList.toggle("completed",checkbox.checked);
    });

    const deleteButton = document.createElement("button"); // Adds delete button to each task
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px"
    newListItem.appendChild(deleteButton)

    deleteButton.addEventListener("click", () => {
        newListItem.remove();
    });
}

const button = document.getElementById("addButton")
button.addEventListener("click", addNewTask); 
