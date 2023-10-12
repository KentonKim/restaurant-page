export const addTask = (parentDiv, title) => {
    const button = document.createElement('button');
    button.textContent = title;
    button.className = 'overflow-hidden text-ellipsis w-full h-20 px-5'
    parentDiv.appendChild(button);
    return button;
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

