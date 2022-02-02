/*
                    20
            10               30
        5       15      25      35
      2   7   13  17  23   27 32  37


      BFS traversal: 20, 10, 30, 5, 15, 25, 35, 2, 7, 13, 17, 23, 27, 32, 37
*/

const Tree = require('../Tree')

const tree = new Tree()

tree.push(20)
tree.push(10)
tree.push(30)
tree.push(5)
tree.push(15)
tree.push(25)
tree.push(35)
tree.push(2)
tree.push(7)
tree.push(13)
tree.push(17)
tree.push(23)
tree.push(27)
tree.push(32)
tree.push(37)

function bfs(tree) {
  const node = tree.root

  const queue = []
  const ordered = []
  queue.push(node)

  while (queue.length) {
    const node = queue.shift()

    ordered.push(node.root)

    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }

  return ordered
}

module.exports = {
  bfs,
}
