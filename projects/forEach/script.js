const taskForm = document.getElementById('taskForm');
const button = document.getElementById('buttonAdd');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const cleanButton = document.getElementById('clean-all');

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

cleanButton.addEventListener('click', function() {
    const tasks = document.querySelectorAll('#taskList li');
    tasks.forEach(function( task) {
        taskList.removeChild(task);
    })
});