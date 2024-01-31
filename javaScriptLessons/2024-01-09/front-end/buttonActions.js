const moveToDoneBtn = document.querySelector('.moveToDone'),
moveToTodoBtn = document.querySelector('.moveToToDo'),
deleteToDoBtn = document.querySelector('.deleteToDo')

// const doneListElement = document.querySelector('.done-list')
// const todoListElement = document.querySelector('.all-todos')

const moveToDoToDone = () => {
    const allTodosCheckedInputs = document.querySelectorAll('.all-todos .todo input:checked');
    for(const inputElement of allTodosCheckedInputs)
    {
        inputElement.value = false;
         doneListElement.append(inputElement.parentElement)
    }
}

const moveTodoToTodoList = () => {
    const allTodosCheckedInputs = document.querySelectorAll('.done-list .todo input:checked');
    for(const inputElement of allTodosCheckedInputs)
    {
        inputElement.value = false;
         todoListElement.append(inputElement.parentElement)
    }
}

const deleteToDoElement = () => {
    const allTodosCheckedInputs = document.querySelectorAll('.todo input:checked');
    for(const inputElement of allTodosCheckedInputs)
    {
        inputElement.parentElement.remove()
    }
}

moveToTodoBtn.onclick = moveTodoToTodoList;
moveToDoneBtn.onclick = moveToDoToDone;
deleteToDoBtn.onclick = deleteToDoElement;