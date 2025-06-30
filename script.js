// This function allows the user to create a new task and adds it to the existing list

const currentTasks = document.getElementById("tasklist") // Takes the existing tasks
const newTask = document.createElement("li") // Creates a new list item

function addNewTask(parentList,newTask) {
    parentList.appendChild(newTask)
}
