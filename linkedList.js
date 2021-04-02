class Node {
    constructor(value) {
        this.value = value
        this.previous = null
    }
}

class Stack {
    constructor() {
        this.head = null
        this._length = 0
    }
}

Stack.prototype.add = function(value) {
    let node = new Node(value)
    node.previous = this.head
    this.head = node
    this._length++
    return this.head
}

Stack.prototype.remove = function() {

    let currentNode = this.head

    if (this._length === 0) {
        console.log(`Can't be deleted (stack empty)`)
        return
    }

    this.head = this.head.previous
    this._length--

    return currentNode
}

const stack = new Stack()

stack.add('First')
stack.add('Second')
stack.add('Third')
stack.add('Fourth')
stack.add('fifth')

stack.remove()

console.log('stack', stack)