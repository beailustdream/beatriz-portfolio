const taskList = document.getElementById("taskList");
const input = document.getElementById("taskInput");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {

    if (currentFilter === "active" && task.completed) return;
    if (currentFilter === "completed" && !task.completed) return;

    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add("completed");
    }

    li.onclick = () => {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
    };

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";

    removeBtn.onclick = (e) => {
      e.stopPropagation();
      tasks.splice(index, 1);
      saveTasks();
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  });

  const count = document.getElementById("taskCount");
  count.textContent = `${tasks.length} tarefas no total`;
}

function addTask() {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Digite uma tarefa!");
    return;
  }

  tasks.push({
    text: taskText,
    completed: false
  });

  input.value = "";
  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function filterTasks(type) {
  currentFilter = type;
  renderTasks();
}

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

renderTasks();