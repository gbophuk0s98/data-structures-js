class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this._length = 0
    }
}

LinkedList.prototype.add = function (value) {
    let node = new Node(value),
        currentNode = this.head

    if (!currentNode) {
        this.head = node
        this._length++

        return node
    }

    while (currentNode.next) {
        currentNode = currentNode.next
    }

    currentNode.next = node
    this._length++

    return node
}

LinkedList.prototype.remove = function (position) {
    let currentNode = this.head,
        beforeNodeToDelete = null,
        nodeTodelete = null,
        i = 0

    if (position < 0 || position >= this._length) {
        console.log('Non-existend node in list')
        return
    }

    if (position === 0) {
        this.head = currentNode.next
        this._length--

        return
    }

    while (i < position) {
        beforeNodeToDelete = currentNode
        currentNode = currentNode.next
        nodeTodelete = currentNode
        i++
    }

    beforeNodeToDelete.next = nodeTodelete.next
    this._length--

    return
}

LinkedList.prototype.find = function (position) {

    let currentNode = this.head,
        i = 0

    if (position < 0 || position >= this._length) {
        return 'Non-existend node in list'
    }

    while (i < position) {
        currentNode = currentNode.next
        i++
    }

    return currentNode
}

const list = new LinkedList()

list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(5)
list.add(6)
list.add(7)
list.add(8)
list.add(9)

list.remove(0)
list.remove(0)
list.remove(0)
list.remove(0)
list.remove(0)

console.log(list.find(1))

console.log(list)