function bfs(graph) {
  const rootNode = graph.nodes.get(1)
  const visited = new Set()

  const queue = [rootNode.value]
  const traversed = []

  while (queue.length) {
    const currentNodeValue = queue.shift()
    const currentNode = graph.nodes.get(currentNodeValue)

    if (!visited.has(currentNode.value)) {
      traversed.push(currentNodeValue)
      const connections = currentNode.connections
      queue.push(...(connections ? connections : []))
      visited.add(currentNode.value)
    }
  }

  return traversed
}

function dfs(graph, currentNodeValue, traversed = [], visited = new Set()) {
  const currentNode = graph.nodes.get(currentNodeValue)

  if (!visited.has(currentNodeValue)) {
    traversed.push(currentNodeValue)

    const connections = [...(currentNode.connections || [])]

    while (connections.length) {
      const connection = connections.shift()
      dfs(graph, connection, traversed, visited)
    }

    visited.add(currentNodeValue)
  }

  return traversed
}

module.exports = {
  bfs,
  dfs,
}
