function BSTNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

function BST(){
    this.root = null;
};

BST.prototype.add = function(val){
    var bstNode = new BSTNode(val);

    if (this.root == null) {
        this.root = bstNode;
    }
    else {
        var currentNode = this.root;
        while(currentNode){
            if (currentNode.val < val) {
                if (currentNode.right == null) {
                    currentNode.right = bstNode;
                    return;
                }
                currentNode = currentNode.right;
            }
            else {
                if (currentNode.left == null) {
                    currentNode.left = bstNode;
                    return;
                }
                currentNode = currentNode.left;
            }
        }
    }
    return this;
}

var x = new BST();
console.log(x.add(6))
x.add(2);
x.add(8);
x.add(1);
x.add(4);
x.add(7);
x.add(10);
console.log(x);