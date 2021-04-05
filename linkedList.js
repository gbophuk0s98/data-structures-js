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

    add(value) {
        let node = new Node(value),
            currentNode = this.head

        if (!this.head) {
            this.head = node
            this._length++
            
            return this.head
        }

        // если 2 элемент добавляется
        if (currentNode.value[0] === value[0]) {
            this.head = node
            return this.head
        }

        while (currentNode.next) {
            if (currentNode.value[0] === value[0]) {
                currentNode = node
                return node
            }
            currentNode = currentNode.next
        }
        
        currentNode.next = node
        this._length++
        
        return node
    }

    find(key) {
        let currentNode = this.head

        while (currentNode.next) {
            if (currentNode.value[0] === key) return currentNode.value[1]
            currentNode = currentNode.next
        }
        return currentNode.value[1]
    }

    delete(key) {
        let currentNode = this.head,
            beforeNodeToDelete = null
        
        if (this.head.value[0] === key) {
            this.head = currentNode.next
            this._length--
            return
        }

        while (currentNode.value[0] !== key) {
            beforeNodeToDelete = currentNode
            if (!currentNode.next) break
            currentNode = currentNode.next
        }

        beforeNodeToDelete.next = currentNode.next
        this._length--

        return
    }
}

class HashTable {

    constructor() {
        this._store = new Array(15)
    }

    hashFunc = key => {
        let idx = 0

        for (let i = 0; i < key.length; i++)
            idx += key.charCodeAt(i)
        return idx % this._store.length
    }

    add(key, value) {
        let linkedList, 
            storeElement = this._store[this.hashFunc(key)]

        storeElement ? linkedList = storeElement : linkedList = new LinkedList()
        linkedList.add([key, value])
        
        this._store[this.hashFunc(key)] = linkedList
    }

    findValue(key) {
        let storeElement = this._store[this.hashFunc(key)]
        if (!storeElement || !storeElement.head) return undefined
        return storeElement.find(key)
    }

    deleteByKey(key) {
        let storeElement = this._store[this.hashFunc(key)]
        if (!storeElement) return undefined
        this._store[this.hashFunc(key)].delete(key)
    }
}

const hashTable = new HashTable()

hashTable.add('foo', '1')
hashTable.add('foo', '3')
hashTable.add('foo', '1111')
hashTable.add('ofo', '33333333')
hashTable.add('oof', 'x11x1x1x')
hashTable.add('bar', '2')
hashTable.add('ZZZZ', '21231')
hashTable.add('BBQ', 'BBQ value')
hashTable.add('BQB', 'BQB value')

hashTable.deleteByKey('baran')
hashTable.deleteByKey('ZZZZ')

console.log(hashTable.findValue('oof'), hashTable.findValue('BQB'))

console.log(hashTable)