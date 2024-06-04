// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const randomId = Math.random() .toString(36);.subster(2, 9);
    return randomId;

}

// Todo: create a function to create a task card
function createTaskCard(task) {
    JSON.parse(localStorage.getItem('tasks'));
    const taskCard = $('<div>');
    $('#todo-cards'). append(taskCard);
    taskCard.addClass('card task-card draggable my-3); 
    taskCard.attr('data-task-id', task.id)
    const taskCardHeader = $('<div>').addClass('card-header h4').text(task.title);
    return taskCardHeader; 
    
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    let tasks =JSON.parse(localStorage.getItem('tasks')) || [];

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTask = {
        id: generateTaskId(),
        title: $('#new-task-title').val(),
        description: $('#new-task-description').val(),
        dueDate: $('#new-task-due-date').val(),
        status: 'to-do',
    };

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    asks = tasks.
        filter(task => task.id !== taskId);
    updateLocalStorage();
    renderTasks();

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    const taskId = $(ui.draggable).attr('data-task-id');
    const task = tasks.find(task => task.id === taskId);
    task.status = event.target.id;
    updateLocalStorage();
    renderTasks();

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderTaskList();
    $('#add-task-form').on('submit', handleAddTask);
    $('#todo-cards').on('click', '.delete-task', handleDeleteTask);
    $('#todo-cards').droppable({
        drop: handleDrop,
    });
    $('#new-task-due-date').datepicker();

});
