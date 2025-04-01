// Selecting elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add Task Function
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = ""; // Clear the input field
    }
}

// Delete Task Function
function deleteTask(element) {
    element.parentElement.remove();
}

// Event Listener for Add Button
addTaskBtn.addEventListener('click', addTask);

// Event Listener for Enter Key
taskInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
