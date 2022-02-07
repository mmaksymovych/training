class Node {
  value
  connections = new Set()

  constructor(value) {
    this.value = value
  }

  addConnection(value) {
    this.connections.add(value)
  }

  deleteConnection(value) {
    this.connections.delete(value)
  }
}

const GRAPH_DIRECTION = {
  DIRECTED: 'DIRECTED',
  UNDIRECTED: 'UNDIRECTED',
}

class Graph {
  direction
  nodes = new Map()

  constructor(direction) {
    this.direction = direction
  }

  addNode(value, connectionValue) {
    const node = this.getOrCreateNode(value)
    const connectionNode = this.getOrCreateNode(connectionValue)

    node.addConnection(connectionValue)

    if (this.direction === GRAPH_DIRECTION.UNDIRECTED) {
      connectionNode.addNeighbor(value)
    }
  }

  getOrCreateNode(value) {
    const node = this.nodes.get(value)

    if (node) {
      return node
    } else {
      const node = new Node(value)
      this.nodes.set(value, node)
      return node
    }
  }

  print() {
    this.nodes.forEach((value, key) => {
      console.log(key)
      value.connections.forEach((el) => console.log(`connection - ${el}`))
    })
  }
}

const graph = new Graph(GRAPH_DIRECTION.DIRECTED)

graph.addNode(1, 3)
graph.addNode(5, 6)
graph.addNode(1, 2)
graph.addNode(1, 3)
graph.addNode(3, 1)

graph.print()
