/* eslint-disable no-underscore-dangle */
import Node from "./ListNode";

export default class DoublyLinkedList {
  constructor(node) {
    this.head = node;
    this.end = node;
  }

  insertEnd(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.end = node;
      return;
    }
    node.previous = this.end;
    this.end.next = node;
    this.end = this.end.next;
  }

  deleteEnd() {
    if (this.head === null) {
      throw new Error("Linked List in empty");
    }
    if (this.head.next === null) {
      this.head = null;
      this.end = null;
      
    } else {
      this.end = this.end.previous;
      this.end.next = null;
    }
  }
}
