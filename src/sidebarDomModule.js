export const addTask = (parentDiv, title) => {
    const button = document.createElement('button');
    button.textContent = title;
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

