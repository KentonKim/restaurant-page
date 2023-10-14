export const addTask = (parentDiv, title, onClickTask, onClickDelete) => {
    const element = document.createElement('div');
    element.className = 'select-none overflow-hidden text-ellipsis w-full h-20 flex items-center cursor-pointer task-div relative'
    const elementTextDiv = document.createElement('div')
    elementTextDiv.className = 'transition-width h-full p-5 w-full z-10'
    elementTextDiv.textContent = title;
    elementTextDiv.addEventListener('mousedown', onClickTask);
    const elementDelete = document.createElement('div')
    elementDelete.className = 'absolute right-0 h-full w-1/4 bg-red-900 flex items-center justify-center'
    elementDelete.textContent = 'x';
    elementDelete.addEventListener('mousedown', onClickDelete);

    element.appendChild(elementTextDiv)
    element.appendChild(elementDelete)
    parentDiv.prepend(element);

    return element;
};

const toggleShowDelete = (div) => {
    if (div.classList.contains('w-full')) {
        setTimeout(() => {
            document.body.addEventListener('mousedown', (event) => {
                if (event.target !== div.nextElementSibling) {
                    div.classList.add('w-full') 
                    div.classList.remove('w-3/4') 
                }
            } , {once: true});
        }, 10);
    }
    div.classList.remove('w-full') 
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