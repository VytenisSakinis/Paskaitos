let dragElement;


const dropZones = document.querySelectorAll('.dropzone')

function addDragFunctionalityToAllEmenents()
{
    const allDraggableElements = document.querySelectorAll(".draggable")
    for(const element of allDraggableElements){
    element.addEventListener('dragstart', (event) => {
        dragElement = event.target;
    });
    }
}


for(const dropZone of dropZones)
{
    dropZone.addEventListener('dragover', (event) => {
        event.preventDefault();
    })

    dropZone.addEventListener('dragenter', (event) => {
        if(event.target.parentElement.classList.contains('.todo-list'))
        {
            event.target.parentElement.classList.add('dragover')
        }
        else if(event.target.classList.contains('dropzone')){
            event.target.classList.add('dragover')
        }
    });
    
    dropZone.addEventListener('dragleave', (event) => {
        if(event.target.parentElement.classList.contains('.todo-list'))
        {
            event.target.parentElement.classList.remove('dragover')
        }
        else if(event.target.classList.contains('dropzone')){
            event.target.classList.remove('dragover')
        }
    })
    dropZone.addEventListener('drop', (event) =>
    {
        console.log(dragElement.innerText);
        event.preventDefault();
        if(event.target.parentElement.classList.contains('.todo-list'))
        {
            event.target.classList.remove('dragover')
            event.target.appendChild(dragElement)
        }
        
        if(event.target.classList.contains('dropzone')){
            event.target.classList.remove('dragover')
            event.target.appendChild(dragElement);
            const targetID = dragElement.attributes.todoid.value;
            console.log(targetID);
            const moveTarget = document.querySelector(`[todomove="${targetID}"]`)
            moveTarget.innerText = moveTarget.innerText === "Done" ? "Undo" : "Done"
        }
    })
}

