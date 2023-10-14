/* eslint-disable no-underscore-dangle */
export default class SidebarProcessor {
    constructor(todoList, parentDiv, sidebarDomModule) {
        this.currentSelectedTask = null;
        this.todoList = todoList;
        this.parentDiv = parentDiv;
        this.sidebarDomModule = sidebarDomModule;
        // this._titleToElement = {};
        this.onClickTask = (event) => this.select(event.target.parentElement);
        this.onClickDelete = (event) => this.remove(event.target.parentElement);
    }

    add(title, value) {
        const element = this.sidebarDomModule.addTask(this.parentDiv, title, this.onClickTask, this.onClickDelete);
        this.todoList.insertNode(element, title, value);
    };

    select(element) {
        this.sidebarDomModule.selectTask(this.currentSelectedTask, element);
        this.currentSelectedTask = element;
        // TODO move to separate method
        this.todoList.updateNode(element)
    };

    remove(element) {
        if (element === this.currentSelectedTask) {
            this.currentSelectedTask = null;
        };
        this.sidebarDomModule.removeTask(element);
        this.todoList.removeNode(element)
    };

    update(element) {
        // Cache actions
        const isFirst = this.todoList.updateNode(element);
        if (!isFirst) {
            // DOM actions
            this.parentDiv.insertBefore(element, this.parentDiv.firstChild);
        }
    }
};
