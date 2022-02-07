const { Graph, GRAPH_DIRECTION } = require('./index')
const { bfs } = require('./traversals')

const graph = new Graph(GRAPH_DIRECTION.DIRECTED)

graph.addNode(1, 10)
graph.addNode(1, 5)
graph.addNode(1, 6)
graph.addNode(1, 7)

graph.addNode(10, 11)
graph.addNode(10, 12)

graph.addNode(11, 23)
graph.addNode(11, 24)
graph.addNode(11, 5)

graph.addNode(5, 14)
graph.addNode(14, 26)

graph.addNode(6, 15)

graph.addNode(7, 18)
graph.addNode(7, 19)

describe('graph traversals', () => {
  test('bfs', () => {
    const actual = bfs(graph)
    const expected = [1, 10, 5, 6, 7, 11, 12, 14, 15, 18, 19, 23, 24, 26]

    expect(actual).toStrictEqual(expected)
  })
})
