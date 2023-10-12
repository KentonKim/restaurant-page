export const addTask = (parentDiv, title) => {
    const element = document.createElement('div');
    element.textContent = title;
    element.className = 'overflow-hidden text-ellipsis w-full h-20 p-5 flex items-center cursor-pointer task-div'
    // const editButton = document.createElement('button')
    // editButton.textContent = 'tmp edit'
    // const trashButton = document.createElement('button')
    // trashButton.textContent = 'tmp trash'
    // const editImg = document.createElement('img')
    // const trashImg = document.createElement('img')
    // trashButton.appendChild(trashImg)
    // editButton.appendChild(editImg)
    // element.appendChild(trashButton)
    // element.appendChild(editButton)
    parentDiv.prepend(element);
    return element;
};

export const selectTask = (oldDiv, newDiv) => {
    if (oldDiv === newDiv) {
        return;
    };
    if (oldDiv !== null) {
        oldDiv.classList.remove('selectedTask');
    }
    newDiv.classList.add('selectedTask');
};

export const removeTask = (div) => {
    div.remove();
};

