/* eslint-disable no-underscore-dangle */
import TaskNode from "./TaskNode";

export default class TaskLRUCache {
  constructor() {
    this.head = new TaskNode();
    this.end = new TaskNode();
    this._hash = {};
    this.head.nextCreated = this.end;
    this.head.nextModified = this.end;
    this.end.previousCreated = this.head;
    this.end.previousModified = this.head;
  }

  // Method to add
  insertNode(key,value) {
    const newNode = new TaskNode(key, value);
    this._hash[key] = newNode;
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
  removeNode(key) {
    if (!(key in this._hash)) {
      throw new Error('Key is not in Task List');
    }
    const node = this._hash[key];
    node.previousCreated.nextCreated = node.nextCreated;
    node.previousModified.nextModified = node.nextModified;
    node.nextCreated.previousCreated = node.previousCreated;
    node.nextModified.previousModified = node.previousModified;
    delete this._hash[key];
  }

  // Method to update last modified
  updateNode(key) { 
    if (!(key in this._hash)) {
      throw new Error('Key is not in Task List');
    }
    const node = this._hash[key];
    node.updateModified();
    node.previousModified.nextModified = node.nextModified;
    node.nextModified.previousModified = node.previousModified;
    node.previousModified = this.head;
    node.nextModified = this.head.nextModified;
    this.head.nextModified.previousModified = node;
    this.head.nextModified = node;
  }
}
