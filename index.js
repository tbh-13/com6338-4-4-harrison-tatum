var todoForm = document.querySelector('form');
var todoInput = document.querySelector('input');
var todoList = document.querySelector('#todo-list');

todoForm.addEventListener('submit', (e) => {
    // display an empty todo list
    e.preventDefault();

    var taskText = todoInput.value.trim();

    // check if input is not empty
    if (!taskText) return;

    // create new list item
    var li = document.createElement('li');
    var btn = document.createElement('button');

    // set text content
    btn.textContent = taskText;

    li.appendChild(btn);
    todoList.appendChild(li);

    btn.addEventListener('click', function (e) {
        if (btn.style.textDecoration === 'line-through') {
            li.remove();
        } else {
            btn.style.textDecoration = 'line-through';
        }
    });

    // clear input value
    todoInput.value = '';
});