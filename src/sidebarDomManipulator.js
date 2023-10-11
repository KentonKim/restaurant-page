const sidebarDomManipulator = () => {
    // add
    const add = (parentDiv, title) => {
        const button = document.createElement('button');
        button.textContent = title;
        parentDiv.appendChild(button);
        return button;
    };
    // select
    const select = (oldDiv, newDiv) => {
        if (oldDiv === newDiv) {
            return;
        };
        if (oldDiv !== null) {
            oldDiv.classList.remove('selectedTask');
        }
        newDiv.classList.add('selectedTask');
    };

    // delete
    const removeTask = (div) => {
        div.remove();
    };
    return {
        add,
        select,
        removeTask,
    };
};

export default sidebarDomManipulator;
