const taskForm = document.getElementById('taskForm');
const button = document.getElementById('buttonAdd');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

button.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
})

function addTask(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');

    li.textContent = text;
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(span);
    span.textContent = '✅'
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
}

// const tasks = document.querySelectorAll('#taskList li');
// tasks.forEach(function(task) {
//     console.log(task);
//     task.addEventListener('click', function () {
//         task.classList.toggle('completed');
//     })
// })