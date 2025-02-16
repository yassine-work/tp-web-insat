const addButton = document.getElementById('addTodo');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const todoList = document.getElementById('todoList');

addButton.addEventListener('click', function () {
    const name = box1.value;
    const content = box2.value;

    if (name && content) {
        const todoItem = document.createElement('input');
        todoItem.type = 'text';
        todoItem.value = `${name}: ${content}`;
        todoItem.addEventListener('click', function() {
            todoItem.remove();
         });

        todoList.appendChild(todoItem);
        box1.value = '';
        box2.value = '';
    }

    else {
        alert('Please enter both name and content');
    }
});