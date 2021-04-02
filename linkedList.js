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

BinaryTree.prototype.add = function(value) {
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

const tree = new BinaryTree()
tree.add(40)
tree.add(20)
tree.add(10)
tree.add(30)
tree.add(50)
tree.add(90)
tree.add(80)

console.log(tree)