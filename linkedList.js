class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class BinaryTree {
    constructor() {
        this.head = null
    }
}

BinaryTree.prototype.add = function (value) {
    let node = new Node(value),
        currentNode = this.head
    if (!currentNode) {
        this.head = node
        return
    }
    while (currentNode) {
        if (value < currentNode.value) {
            if (!currentNode.left) break
            currentNode = currentNode.left
        } else {
            if (!currentNode.right) break
            currentNode = currentNode.right
        }
    }

    if (value < currentNode.value) {
        currentNode.left = node
    }
    else {
        currentNode.right = node
    }
}

BinaryTree.prototype.findMin = function () {
    let currentNode = this.head

    while (currentNode.left)
        currentNode = currentNode.left
    console.log(currentNode.value)
}

BinaryTree.prototype.findMax = function () {
    let currentNode = this.head

    while (currentNode.right)
        currentNode = currentNode.right
    console.log(currentNode.value)
}

BinaryTree.prototype.find = function (value) {
    let currentNode = this.head
    while (currentNode.value !== value) {
        if (value < currentNode.value)
            currentNode = currentNode.left
        else currentNode = currentNode.right
        if (!currentNode) return null
    }
    return currentNode
}

BinaryTree.prototype.isPresent = function (value) {
    let currentNode = this.head
    while (currentNode) {
        if (value === currentNode.value) return true
        value < currentNode.value ?
            currentNode = currentNode.left : currentNode = currentNode.right
    }
    return false
}

BinaryTree.prototype.findMinInSubTree = function (tree) {
    let currentNode = tree
    while (currentNode.left)
        currentNode = currentNode.left
    return currentNode
}

BinaryTree.prototype.remove = function (value) {
    let currentNode = this.head,
        prevNode = null,
        nodeToDeleted = null,
        rigthPartMinNode = null,
        leftPartMinNode = null

    while (currentNode) {
        if (currentNode.value === value) {
            nodeToDeleted = currentNode
            break
        }
        if (value < currentNode.value) {
            prevNode = currentNode
            currentNode = currentNode.left
        }
        else {
            prevNode = currentNode
            currentNode = currentNode.right
        }
    }
    rigthPartMinNode = this.findMinInSubTree(nodeToDeleted.right)

    value < prevNode.value ?
        prevNode.left = nodeToDeleted.right :
        prevNode.right = nodeToDeleted.right

    rigthPartMinNode.left = nodeToDeleted.left
}

const tree = new BinaryTree()
tree.add(40)
tree.add(20)
tree.add(10)
tree.add(30)
tree.add(50)
tree.add(90)
tree.add(80)
tree.add(9)
tree.add(12)
tree.add(29)
tree.add(35)
tree.add(44)
tree.add(46)

// tree.findMin()
// tree.findMax()
// console.log(tree.find(53120))
// console.log(tree.isPresent(40))
tree.remove(20)
tree.remove(50)
tree.add(43)

console.log(tree)