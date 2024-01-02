// Tree Traversal - Depth First Search

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

  DFSPreOrder() {
    let results = []

    function traverse(currentNode) {
      results.push(currentNode.value)
      
      if (currentNode.left) {
        traverse(currentNode.left)
      }
      if (currentNode.right) {
        traverse(currentNode.right)
      }
    }

    traverse(this.root)

    return results
  }

  DFPSPostOrder() {
    let results = []

    function traverse(currentNode) {
      if (currentNode.left) {
        traverse(currentNode.left)
      }
      if (currentNode.right) {
        traverse(currentNode.right)
      }

      results.push(currentNode.value)
    }

    traverse(this.root)

    return results

  }

  DFSInOrder() {
    let results = []

    function traverse(currentNode) {
      if (currentNode.left) {
        traverse(currentNode.left)
      }

      results.push(currentNode.value)
      
      if (currentNode.right) {
        traverse(currentNode.right)
      }

    }

    traverse(this.root)

    return results
  }
}

const test = new BST()
test.insert(47)
test.insert(21)
test.insert(76)
test.insert(18)
test.insert(27)
test.insert(52)
test.insert(82)

console.log(JSON.stringify(test.DFSPreOrder(), null, 2))
console.log(JSON.stringify(test.DFPSPostOrder(), null, 2))
console.log(JSON.stringify(test.DFSInOrder(), null, 2))