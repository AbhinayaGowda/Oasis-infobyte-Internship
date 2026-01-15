const quotes = [
  "Small steps every day lead to big results.",
  "Discipline is choosing what you want most over what you want now.",
  "Focus on progress, not perfection.",
  "Your future is created by what you do today.",
  "Consistency beats motivation."
];

document.getElementById("quote").innerText =
  quotes[Math.floor(Math.random() * quotes.length)];

function updateStats() {
  pendingCount.innerText = pending.children.length;
  completedCount.innerText = completed.children.length;
}

function addTask() {
  if (!taskText.value) return;

  const li = document.createElement("li");
  li.innerHTML = `
    <div class="task-header">
      <strong>${taskText.value}</strong>
      <span class="priority ${priority.value}">
        ${priority.value.toUpperCase()}
      </span>
    </div>
    <div class="task-time">
      Due: ${taskTime.value || "Not set"}
    </div>
    <div class="actions">
      <button onclick="completeTask(this)">Complete</button>
      <button onclick="editTask(this)">Edit</button>
      <button onclick="deleteTask(this)">Delete</button>
    </div>
  `;

  pending.appendChild(li);
  taskText.value = "";
  taskTime.value = "";
  updateStats();
}

function completeTask(btn) {
  const li = btn.parentElement.parentElement;
  btn.remove();
  completed.appendChild(li);
  updateStats();
}

function editTask(btn) {
  const li = btn.parentElement.parentElement;
  const newText = prompt("Edit task:", li.querySelector("strong").innerText);
  if (newText) li.querySelector("strong").innerText = newText;
}

function deleteTask(btn) {
  btn.parentElement.parentElement.remove();
  updateStats();
}
