// Tree Traversal - Breadth First Search

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)

    if(!this.root) {
      this.root = newNode
      return this
    }

    let temp = this.root
    while(true) {
      if(newNode.value === temp.value) {
        return undefined
      }
      if (value < temp.value) {
        if(!temp.left) {
          temp.left = newNode
          return this
        }

        temp = temp.left
      } else {
        if(!temp.right) {
          temp.right = newNode
          return this
        }

        temp = temp.right
      }
    }
  }

  contains(value) {
    if (this.root === null) {
      return false
    }

    let temp = this.root
    while(temp) {
      if (value < temp.value) {
        temp = temp.left

      } else if (value > temp.value) {
        temp = temp.right
      } else {
        return true
      }
    }
    
    return false
  }

  minValueNode(currentNode) {
    while(currentNode.left) {
      currentNode = currentNode.left
    }

    return currentNode
  }

  BST() {
    let currentNode = this.root
    let results = []
    let queue = []

    queue.push(currentNode)

    while(queue.length) {
      currentNode = queue.shift()
      results.push(currentNode.value)
      
      if(currentNode.left) {
        queue.push(currentNode.left)
      }
      if(currentNode.right) {
        queue.push(currentNode.right)
      }
    }

    return results;
  }
}

const test = new BST()
test.insert(23)
test.insert(49)
test.insert(1)
test.insert(16)
test.insert(86)
console.log(JSON.stringify(test, null, 2))
console.log(JSON.stringify(test.BST(), null, 2))

// console.log(test.contains(86))
// console.log(JSON.stringify(test, null, 2))
// console.log(test.minValueNode(test.root))
// console.log(test.minValueNode(test.root.right))