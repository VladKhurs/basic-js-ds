const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  root() {
    if(this.root.data === undefined) return null

    return this.rootNode
  }

  add(data) {

    let addedNode = new Node(data)
    const addNode = node => {
      if(data < node.data) {
        if(!node.left) {
          node.left = addedNode
        }
        else {
          addNode(node.left)
        }
      }

      else if(data > node.data) {
        if(!node.right) {
          node.right = addedNode
        }
        else {
          addNode(node.right)
        }
      }
    }
    addNode(this.rootNode)
  }

  has(data) {
    let nodeNow = this.rootNode 
    while(nodeNow) {
      if(data === nodeNow.data) {
        return true
      }
      if(data < nodeNow.data) {
        nodeNow = nodeNow.left
      } else {
        nodeNow = nodeNow.right
      }
    }
    return false
  }

  find(data) {
    const n = null
    let nodeNow = this.rootNode 
    while(nodeNow) {
      if(data === nodeNow.data) {
        return nodeNow
      }
      if(data < nodeNow.data) {
        nodeNow = nodeNow.left
      } else {
        nodeNow = nodeNow.right
      }
    }
    return n
  }

  remove(data) {
    let nodeNow = this.rootNode 
    while(nodeNow !== null) {
      if(data < nodeNow.data) {
        nodeNow = nodeNow.right
      }
      else if(data > nodeNow.data) {
        nodeNow = nodeNow.left
      }
    }
  }

  min() {
    let nodeNow = this.rootNode
    while(nodeNow.left) {
      nodeNow = nodeNow.left
    }
    return nodeNow.data
  }

  max() {
    let nodeNow = this.rootNode
    while(nodeNow.right) {
      nodeNow = nodeNow.right
    }
    return nodeNow.data
  }

}

module.exports = {
  BinarySearchTree
};
