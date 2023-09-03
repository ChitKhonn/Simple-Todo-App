const todoInput = document.getElementById("todoData");
console.log("todo data is " + todoInput.value)
const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");
const searchInput = document.getElementById('searchInput');


const tasks = [];

function addTask(taskText) {
    if (taskText.trim() === '') {
        alert('Please enter a task.');
        return;
    }
    console.log("taskText is" + taskText)

    tasks.push(taskText);
    todoInput.value = '';
    updateTaskList();
    searchTasks();
}
function updateTaskList() {
    todoList.innerHTML = '';

    tasks.forEach(task => {

        const p = document.createElement('p');
        p.innerHTML = `
           
             <div class="col-12 ">
      <div class="d-flex justify-content-between">
        <span>${task}</span>

        <span class="material-symbols-outlined" onclick="deleteTask(${task.id})" style="color: red;">
          delete

        </span>
      </div>
      <hr class="mb-0">
    </div>
        `;

        todoList.appendChild(p);
    });
}
function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(function (task) {
        return task.id === taskId;
    });
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        updateTaskList();
    }
}

function searchTasks() {
    const searchText = searchInput.value.toLowerCase();

    const filteredTasks = tasks.filter(task =>
        task.toLowerCase().includes(searchText)
    );

    updateTaskList(filteredTasks);
}

function updateTaskList(filteredTasks = tasks) {
    todoList.innerHTML = '';

    filteredTasks.forEach(function (task) {
        const p = document.createElement('p');
        p.innerHTML = `
           
              <div class="col-12 ">
      <div class="d-flex justify-content-between">
        <span>${task}</span>

        <span class="material-symbols-outlined" onclick="deleteTask(${task.id})" style="color: red;">
          delete

        </span>
      </div>
      <hr class="mb-0">
    </div>
        `;

        todoList.appendChild(p);
    });
}
todoForm.addEventListener('submit', function (e) {
    const data = todoInput.value;
    e.preventDefault();
    addTask(data);

});

searchInput.addEventListener('input', function () {
    searchTasks();
});
updateTaskList();