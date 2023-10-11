/* eslint-disable no-underscore-dangle */
export default class SidebarProcessor {
    constructor(todoList, parentDiv, sidebarDomModule) {
        this.currentSelectedTask = null;
        this.todoList = todoList;
        this.parentDiv = parentDiv;
        this.sidebarDomModule = sidebarDomModule
        this._titleToElement = {}
    }

    add(title, value) {
        const element = this.sidebarDomModule.addTask(this.parentDiv, title);
        this._titleToElement[title] = element;
        this.todoList.insertNode(title, value);
    };

    select(title) {
        this.sidebarDomModule.selectTask(this.currentSelectedTask, this._titleToElement[title]);
        this.currentSelectedTask = this._titleToElement[title];
        // TODO move to separate method
        this.todoList.updateNode(title)
    };

    remove(title) {
        this.sidebarDomModule.removeTask(this._titleToElement[title]);
        delete this._titleToElement[title];
        this.todoList.removeNode(title)
    };
};
