const { bfs } = require('./bfs')
const { preorder, inorder, postorder } = require('./dfs')
const Tree = require('../Tree')

describe('traversals tests', () => {
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

  test('bfs', () => {
    const expected = [20, 10, 30, 5, 15, 25, 35, 2, 7, 13, 17, 23, 27, 32, 37]
    const actual = bfs(tree)

    expect(expected).toStrictEqual(actual)
  })

  describe('dfs', () => {
    test('dfs preorder', () => {
      const expected = [20, 10, 5, 2, 7, 15, 13, 17, 30, 25, 23, 27, 35, 32, 37]
      const actual = preorder(tree.root)

      expect(expected).toStrictEqual(actual)
    })
    test('dfs inorder', () => {
      const expected = [2, 5, 7, 10, 13, 15, 17, 20, 23, 25, 27, 30, 32, 35, 37]
      const actual = inorder(tree.root)

      expect(expected).toStrictEqual(actual)
    })
    test('dfs postorder', () => {
      const expected = [2, 7, 5, 13, 17, 15, 10, 23, 27, 25, 32, 37, 35, 30, 20]
      const actual = postorder(tree.root)

      expect(expected).toStrictEqual(actual)
    })
  })
})
