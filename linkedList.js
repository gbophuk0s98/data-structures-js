class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.head = null
        this._length = 0
    }
}

Queue.prototype.add = function(value) {
    let node = new Node(value),
        currentNode = this.head
    
    if (!this.head) {
        this.head = node
    } else {
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next = node
    }

    this._length++
    return node
}

Queue.prototype.remove = function() {
    let currentNode = this.head
    this.head = currentNode.next
    this._length--
    return currentNode
}

const queue = new Queue()

queue.add(1)
queue.add(2)
queue.add(3)

queue.remove()

console.log('queue', queue)