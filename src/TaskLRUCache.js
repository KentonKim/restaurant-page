import TaskNode from "./TaskNode";

export default class TaskLRUCache {
  constructor() {
    this.head = new TaskNode();
    this.end = new TaskNode();
    this.hash = {};
    this.head.nextCreated = this.end;
    this.head.nextModified = this.end;
    this.end.previousCreated = this.head;
    this.end.previousModified = this.head;
  }

  // Method to add
  insert(key,value) {
    const newNode = new TaskNode( key, value);
    this.hash[key] = newNode;
    newNode.nextCreated = this.head.nextCreated;
    newNode.nextModified = this.head.nextModified;
    newNode.previousCreated = this.head;
    newNode.previousModified = this.head;
    this.head.nextCreated.previousCreated = newNode;
    this.head.nextModified.previousModified = newNode;
    this.head.nextCreated = newNode;
    this.head.nextModified = newNode;
  }

  // Method to delete specific
  delete(key) {
    const node = this.hash[key];
    node.previousCreated.nextCreated = node.nextCreated;
    node.previousModified.nextModified = node.nextModified;
    node.nextModified.previousCreated = node.previousModified;
    node.nextModified.previousModified = node.previousModified;
    this.hash.delete(key);
  }

  // Method to update last modified
  update(key) { 
    const node = this.hash[key];
    node.previousModified.nextModified = node.nextModified;
    node.nextModified.previousModified = node.previousModified;
    node.previousModified = this.head;
    node.nextModified = this.head.nextModified;
    this.head.nextModified.previousModified = node;
    this.head.nextModified = node;
  }
}
