function bfs(graph) {
  const rootNode = graph.nodes.get(1)
  const visited = new Set()

  const stack = [rootNode.value]
  const traversed = []

  while (stack.length) {
    const currentNodeValue = stack.shift()
    const currentNode = graph.nodes.get(currentNodeValue)

    if (!visited.has(currentNode.value)) {
      traversed.push(currentNodeValue)
      const connections = currentNode.connections
      stack.push(...(connections ? connections : []))
      visited.add(currentNode.value)
    }
  }

  return traversed
}

function dfs() {
  return
}

module.exports = {
  bfs,
}
