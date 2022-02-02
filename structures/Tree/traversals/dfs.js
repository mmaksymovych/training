/*
                    20
            10               30
        5       15      25      35
      2   7   13  17  23   27 32  37


      preorder: 20, 10, 5, 2, 7, 15, 13, 17, 30, 25, 23, 27, 35, 32, 37
      inorder: 2, 5, 7, 10, 13, 15, 17, 20, 23, 25, 27, 30, 32, 35, 37
      postorder: 
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

function preorder(node, ordered = []) {
  ordered.push(node.root)

  node.left && preorder(node.left, ordered)
  node.right && preorder(node.right, ordered)

  return ordered
}

function inorder(node, ordered = []) {
  node.left && inorder(node.left, ordered)
  ordered.push(node.root)
  node.right && inorder(node.right, ordered)

  return ordered
}

function postorder(node, ordered = []) {
  node.left && postorder(node.left, ordered)
  node.right && postorder(node.right, ordered)
  ordered.push(node.root)

  return ordered
}

console.log(postorder(tree.root))

module.exports = {
  preorder,
  inorder,
  postorder,
}
