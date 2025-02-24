function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("li");
  
    taskItem.innerHTML = `
      ${taskText}
      <button onclick="removeTask(this)">Delete</button>
    `;
  
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
  
  function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
  }
  