export default class SidebarProcessor {
    constructor(todoList, parentDiv, sidebarDomManipulator) {
        this.currentSelectedTask = null;
        this.todoList = todoList;
        this.parentDiv = parentDiv;
        this.sidebarDomManipulator = sidebarDomManipulator
    }

    add(title, value) {
        this.sidebarDomManipulator.add(this.parentDiv, title);
        this.todoList.insert(title, value);
    };

    select(div, title) {
        this.sidebarDomManipulator.select(this.currentSelectedTask, div);
        this.currentSelectedTask = div;
        // TODO move to separate method
        this.todoList.update(title)
    };

    removeTask(div, title) {
        this.sidebarOutputDOM.removeTask(div);
        this.todoList.removeNode(title)
    };
};
