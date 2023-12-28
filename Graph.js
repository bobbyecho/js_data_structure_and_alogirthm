class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      return false
    }

    this.adjacencyList[vertex] = []
    return true
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return false
    }

    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)

    return true
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return false
    }

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)

    return true
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return undefined
    }

    while(this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }

    delete this.adjacencyList[vertex]

    return this
  }
}

const test = new Graph()
test.addVertex("Bobby")
test.addVertex("Sarah")
test.addVertex("Yosua")

test.addEdge("Bobby", "Sarah")
test.addEdge("Bobby", "Yosua")

test.removeVertex("Sarah")

console.log(JSON.stringify(test, null, 2))