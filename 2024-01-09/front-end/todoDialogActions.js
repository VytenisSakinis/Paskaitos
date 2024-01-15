const texts = {
    moveElementText: {
        todo: "Done",
        done: "Undo"
    }
}


const doneListElement = document.querySelector('.done-list'),
todoListElement = document.querySelector('.all-todos')

const todoInputElement = document.querySelector('#todoInput')
const todoSubmitBtn = document.querySelector('#todoSubmit')

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

function updateToDo(event)
{
    const targetID = event.target.attributes.todoupdate.value;
    const updateTarget = document.querySelector(`[todoid="${targetID}"] .todoText`)
    updateTarget.innerText = prompt("Update your todo!", updateTarget.innerText)
}

function addClickListenersToDoDialogButtons() {
const todoMoveButtons = document.querySelectorAll('.todo-move'),
    todoDeleteButtons = document.querySelectorAll('.todo-delete'),
    todoUpdateButtons = document.querySelectorAll('.todo-update')
for(const updateTodobutton of todoUpdateButtons)
{
    updateTodobutton.onclick = updateToDo;
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
}
addClickListenersToDoDialogButtons()

function addNewToDo(){
    const inputValue = todoInputElement.value;
    todoInputElement.value = ""
    const newToDo = `
    <div class="todo draggable" draggable="true" todoid="2">
              <input type="checkbox" name="todo" />
              <span class="todoText">${inputValue}</span>
              <div class="dropdown">
                <i
                  class="bi bi-three-dots"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></i>
                <ul class="dropdown-menu bg-dark">
                  <li><a class="dropdown-item todo-move" href="#" todomove="2">Done</a></li>
                  <li><a class="dropdown-item todo-delete" href="#" tododelete="2">Delete</a></li>
                  <li><a class="dropdown-item todo-update" href="#" todoupdate="2">Update</a></li>
                </ul>
              </div>
            </div>`

    todoListElement.innerHTML += newToDo
    addDragFunctionalityToAllEmenents();
    addClickListenersToDoDialogButtons();
}

todoSubmitBtn.onclick = addNewToDo()

todoInputElement.onkeydown = (event) => {
    if(event.key === "Enter") addNewToDo()
    console.log(event);
}