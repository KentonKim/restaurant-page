import TreeNode from './treenode.js';

export default class DoublyLinkedTree {
    constructor () {
        this.head = null
        this.end = null
    }

    insertEnd(value) {
        let node = new TreeNode(value)
        if (this.head === null) {
            this.head = node
            this.end = node
            return
        }
        node.previous = this.end
        this.end.next = node
        this.end = this.end.next
    }

    deletenode() {
        if (this.head === null) {
            throw new Error('Linked List in empty')
        }
        if (this.head.next === null) {
            this.head = null
            this.end = null
            return
        }
        else {
            this.end = this.end.previous
            this.end.next = null
        }
    }
}