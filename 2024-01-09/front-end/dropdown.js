const texts = {
    moveElementText: {
        todo: "Done",
        done: "Undo"
    }
}

const todoMoveButtons = document.querySelectorAll('.todo-move'),
    todoDeleteButtons = document.querySelectorAll('.todo-delete'),
    todoUpdateButtons = document.querySelectorAll('.todo-update')
const doneListElement = document.querySelector('.done-list')
const todoListElement = document.querySelector('.all-todos')

function moveFromTodoToDone(event){
    const targetID = event.target.attributes.todomove.value;
        const moveTarget = document.querySelector(`[todoid="${targetID}"]`);
        console.log(moveTarget);
        doneListElement.appendChild(moveTarget)
        event.target.innerText = texts.moveElementText.done
        event.target.onclick = moveFromDonetoTodo
}

function moveFromDonetoTodo (event){
    const targetID = event.target.attributes.todomove.value;
    const moveTarget = document.querySelector(`[todoid="${targetID}"]`)
    todoListElement.appendChild(moveTarget);
    event.target.innerText = texts.moveElementText.todo
    event.target.onclick = moveFromTodoToDone
}

for(const todoMoveButton of todoMoveButtons)
{
    todoMoveButton.onclick = moveFromTodoToDone;
}

for(const deleteButton of todoDeleteButtons)
{
    deleteButton.onclick = (event) => {
        const targetID = event.target.attributes.tododelete.value;
        const deleteTarget = document.querySelector(`[todoid="${targetID}"]`)
        deleteTarget.remove()
    }
}