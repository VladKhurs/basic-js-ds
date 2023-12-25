const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class Node {
//   constructor(data) {
//       this.data = data;
//       this.left = null;
//       this.right = null;
//   }
// }

class BinarySearchTree {

  constructor() {
    this.rootData = null;
  }

  root() {
    // if(this.rootData === undefined) return null
    return this.rootData;
  }

  addNode(node, newNode) {
    if(newNode.data < node.data) {
      if(!node.left) {
        node.left = newNode;
      }
      else {
        this.addNode(node.left, newNode);
      }
    }

    else if(newNode.data > node.data) {
      if(!node.right) {
        node.right = newNode;
      }
      else {
        this.addNode(node.right, newNode);
      }
    }
  }

  add(data) {

    let addedNode = new Node(data);

    if (this.rootData === null) {
      this.rootData = addedNode;
    } else this.addNode(this.rootData, addedNode);
  }

  has(data) {
    let nodeNow = this.rootData 
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
    let nodeNow = this.rootData 
    while(nodeNow) {
      if(data === nodeNow.data) {
        return nodeNow
      }
      if(data < nodeNow.data) {
        nodeNow = nodeNow.left
      }
      else {
        nodeNow = nodeNow.right
      }
    }
    return n
  }

  remove(data) {
    this.rootData = this.removeData(this.rootData, data);
  }

  removeData(node, data) {
    if (node === null) {
      return null;
    } 
    else if (data < node.data) {
      node.left = this.removeData(node.left, data);
      return node;
    }
    else if (data > node.data) {
      node.right = this.removeData(node.right, data);
      return node;
    }
    else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      }
      else if(node.right === null) {
        node = node.left;
        return node;
      }
      let newNode = this.findMinNode(node.right);
      node.data = newNode.data;
      node.right = this.removeData(node.right, newNode.data);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null)
        return node;
    else
        return this.findMinNode(node.left);
  }

  min() {
    let nodeNow = this.rootData
    while(nodeNow.left) {
      nodeNow = nodeNow.left
    }
    return nodeNow.data
  }

  max() {
    let nodeNow = this.rootData
    while(nodeNow.right) {
      nodeNow = nodeNow.right
    }
    return nodeNow.data
  }

}



module.exports = {
  BinarySearchTree
};
