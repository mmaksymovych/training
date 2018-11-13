const Node = require('./Node');

class Tree {
  constructor() {
    this.root = null;
  }

  push(number) {
    if(!this.root) {
      this.root = new Node(number);
      return;
    }

    let currentNode = this.root;
    const newNode = new Node(number);

    while(currentNode) {
      if(number < currentNode.root) {
        if(!currentNode.left) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      }   else {
        if(!currentNode.right) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
}



module.exports = Tree;
