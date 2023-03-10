const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);

function formHandler (event) {
    event.preventDefault();

    const taskText = todoInput.value;

    const newTask = document.createElement('li');
    newTask.innerText = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.innerText = 'Удалить';
    deleteBtn.style['margin-left'] = '20px';
    newTask.append(deleteBtn);

    deleteBtn.addEventListener('click', function () {
        this.closest('li').remove();
    });


    todoList.append(newTask);

    todoInput.value = '';
    todoInput.focus();

}
