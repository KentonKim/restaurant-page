export const addTask = (parentDiv, title, onClickTask, onClickDelete) => {
    const element = document.createElement('div');
    element.className = 'task-div'
    const elementTextDiv = document.createElement('div')
    elementTextDiv.className = 'task-div-text'
    elementTextDiv.textContent = title;
    elementTextDiv.addEventListener('mousedown', onClickTask);
    const elementDelete = document.createElement('div')
    elementDelete.className = 'task-div-delete'
    elementDelete.textContent = 'x';
    elementDelete.addEventListener('mousedown', onClickDelete);

    element.appendChild(elementTextDiv)
    element.appendChild(elementDelete)
    parentDiv.prepend(element);

    return element;
};

const toggleShowDelete = (div) => {
    if (!div.classList.contains('w-3/4')) {
        setTimeout(() => {
            document.body.addEventListener('mousedown', (event) => {
                if (event.target !== div.nextElementSibling) {
                    div.classList.remove('w-3/4') 
                }
            } , {once: true});
        }, 10);
    }
    div.classList.add('w-3/4') 
}

export const selectTask = (oldDiv, newDiv) => {
    if (oldDiv === newDiv) {
        toggleShowDelete(newDiv.firstChild);
        return;
    };
    if (oldDiv !== null) {
        oldDiv.firstChild.classList.remove('selected-task');
        // toggleShowDelete(oldDiv.firstChild)
    }
    newDiv.firstChild.classList.add('selected-task');
};

export const removeTask = (div) => div.remove();