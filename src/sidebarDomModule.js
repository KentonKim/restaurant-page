export const addTask = (parentDiv, title, onClickFxn) => {
    const element = document.createElement('div');
    element.textContent = title;
    element.className = 'overflow-hidden text-ellipsis w-full h-20 p-5 flex items-center cursor-pointer task-div'
    element.addEventListener('click', onClickFxn);
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

