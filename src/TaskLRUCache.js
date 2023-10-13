/* eslint-disable no-underscore-dangle */
import TaskNode from "./TaskNode";

export default class TaskLRUCache {
  constructor() {
    this.head = new TaskNode();
    this.end = new TaskNode();
    this._weakMap = new WeakMap();
    this.head.nextCreated = this.end;
    this.head.nextModified = this.end;
    this.end.previousCreated = this.head;
    this.end.previousModified = this.head;
  }

  // Method to add
  insertNode(element, key, value) {
    const newNode = new TaskNode(key, value);
    this._weakMap.set(element, newNode);
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
  removeNode(element) {
    if (!(this._weakMap.has(element))) {
      throw new Error('Element is not in Task List');
    }
    const node = this._weakMap.get(element);
    node.previousCreated.nextCreated = node.nextCreated;
    node.previousModified.nextModified = node.nextModified;
    node.nextCreated.previousCreated = node.previousCreated;
    node.nextModified.previousModified = node.previousModified;
    this._weakMap.delete(element);
  }

  // Method to update last modified
  updateNode(element) { 
    if (!(this._weakMap.has(element))) {
      throw new Error('Element is not in Task List');
    }
    const node = this._weakMap.get(element);
    node.updateModified();
    if (this.head.nextModified === node) {
      return true;
    }
    node.previousModified.nextModified = node.nextModified;
    node.nextModified.previousModified = node.previousModified;
    node.previousModified = this.head;
    node.nextModified = this.head.nextModified;
    this.head.nextModified.previousModified = node;
    this.head.nextModified = node;
    return false;
  }
}
