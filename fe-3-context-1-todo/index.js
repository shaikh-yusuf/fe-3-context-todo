const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
let editoption = {
  editEle: false,
  rowEle: null,
};
// Load tasks from local storage and add them to the list
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
savedTasks.forEach((task) => addTask(task.text));

// Event listener for adding a new task
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (editoption.editEle) {
    ediRecord();
  }
  {
    if (taskText) {
      addTask(taskText, false);
      taskInput.value = "";
    }
  }
});

function addTask(text, completed) {
  // Create task item and set text
  const taskItem = document.createElement("li");
  // const taskText = document.createElement("span");
  // taskText.textContent = text;
  // taskItem.appendChild(taskText);

  taskItem.innerHTML = `
  <span>${text}</span>
  <button onclick='completeEle(this)'></button>
  <button onclick='deleteEle(this)'>Delete</button>
  <button onclick='editEle(this)'>Edit</button>

  `;
  // Mark as completed if applicable

  // Create and add "Complete" button

  // Create and add "Edit" button

  // Add logic for editing a task

  // Create and add "Delete" button

  // Append buttons to task item and task item to list

  taskList.appendChild(taskItem);

  // Save updated tasks to local storage
  saveTasks();
}
function deleteEle(but) {
  let parent = but.parentNode;
  parent.remove();
}
function editEle(but) {
  let parent = but.parentNode;
  console.log(parent.children[0].innerHTML);
  taskInput.value = parent.children[0].innerHTML;
  editoption = {
    editEle: true,
    rowEle: parent.children[0].innerHTML,
  };
  ediRecord(editoption);
}
function ediRecord(params) {
  // editoption.rowEle.value=taskInput.value;
  editoption = {
    editEle: false,
    rowEle: null,
  };
}
function completeEle(but) {
  but.innerHTML = `
   <input type="checkbox" checked>

   `;
}

function saveTasks() {
  const tasks = Array.from(taskList.children).map((task) => ({
    text: task.querySelector("span").textContent, // Extract task text
    completed: task.classList.contains("completed"), // Check if task is completed
  }));
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Save to local storage
}
