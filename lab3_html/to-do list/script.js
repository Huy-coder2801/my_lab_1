function addTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value;
    var taskList = document.getElementById("task-list");
    var taskItem = document.createElement("li");
    taskItem.appendChild(document.createTextNode(taskText));
    taskList.appendChild(taskItem);
    taskInput.value = "";
    saveTasks();
  }
  
  function saveTasks() {
    var taskList = document.getElementById("task-list");
    var tasks = taskList.innerHTML;
    localStorage.setItem("tasks", tasks);
  }
  
  function loadTasks() {
    var taskList = document.getElementById("task-list");
    var tasks = localStorage.getItem("tasks");
    if (tasks) {
      taskList.innerHTML = tasks;
    }
  }
  