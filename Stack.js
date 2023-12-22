class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value)

    this.top = newNode
    this.length = 1
  }

  push(value) {
    const newNode = new Node(value)

    if (this.length === 0) {
      this.top = newNode
    } else {
      newNode.next = this.top
      this.top = newNode
    }

    this.length++

    return this
  }

  pop() {
    if(this.length === 0) {
      return undefined
    }

    let poppedNode = this.top
    this.top = poppedNode.next
    poppedNode.next = null

    this.length--

    return poppedNode
  }
}

const test = new Stack(7)
test.push(23)
test.push(3)
test.push(11)
test.pop()
console.log(JSON.stringify(test, null, 2))