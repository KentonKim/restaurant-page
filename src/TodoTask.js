export default class TodoTask {
  constructor(title, tree) {
    this.title = title 
    this.tree = tree;
    this.date = new Date();
  }
}
