class Node {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insertNode(node, newNode) {
    if(newNode.value>node.value){
      if(!node.right){
        node.right = newNode;
      }else{
        this.insertNode(node.right,newNode);
      } 
    }else if(newNode.value<node.value){
      if(!node.left){
        node.left = newNode;
      }else{
        this.insertNode(node.left,newNode);
      }
    }
  }

  insertValue(value){
    let newNode=new Node(value);
    if(!this.root){
      this.root=newNode;      
    }else{
      this.insertNode(this.root,newNode);
    }
  }
}

const bst=new BinarySearchTree();
bst.insertValue(7);
bst.insertValue(2);
bst.insertValue(9);
bst.insertValue(11);
console.log('bst:', JSON.stringify(bst));
