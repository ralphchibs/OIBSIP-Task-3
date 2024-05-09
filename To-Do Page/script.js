let tasks = [];
let completedTasks = [];

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText !== "") {
    let newTask = {
      text: taskText,
      date: new Date().toLocaleString()
    };

    tasks.push(newTask);
    displayTasks();
    taskInput.value = "";
  }
}

function displayTasks() {
  let pendingTasksList = document.getElementById("pendingTasks");
  let completedTasksList = document.getElementById("completedTasks");

  // Clear existing lists
  pendingTasksList.innerHTML = "";
  completedTasksList.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.textContent = task.text;
    
    let completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = function() {
      completeTask(index);
    };
    
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      deleteTask(index);
    };
    let dateTime = document.createElement("span");
    dateTime.textContent= task.date;
    dateTime.classList.add("date-time");
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    li.appendChild(dateTime);
    pendingTasksList.appendChild(li);
  });

  completedTasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.textContent = task.text;
    li.classList.add("completed");
    
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      deleteCompletedTask(index);
    };
    let dateTime = document.createElement("span");
    dateTime.textContent = task.date;
    dateTime.classList.add("date-time");
     li.appendChild(deleteButton);
     li.appendChild(dateTime);
     completedTasksList.appendChild(li);
  });
}

function completeTask(index) {
  let completedTask = tasks.splice(index, 1)[0];
  completedTasks.push(completedTask);
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function deleteCompletedTask(index) {
  completedTasks.splice(index, 1);
  displayTasks();
}

displayTasks();
