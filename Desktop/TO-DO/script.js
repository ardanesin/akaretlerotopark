let taskList = document.getElementById("taskList");
let newTaskInput = document.getElementById("newTaskInput");

function addTask() {
  let taskText = newTaskInput.value.trim();
  if (taskText === "") {
    return;
  }
  let newTask = document.createElement("li");
  let taskTextSpan = document.createElement("span");
  let deleteButton = document.createElement("button");
  taskTextSpan.textContent = taskText;
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() {
    taskList.removeChild(newTask);
  });
  newTask.appendChild(taskTextSpan);
  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);
  newTaskInput.value = "";
}
