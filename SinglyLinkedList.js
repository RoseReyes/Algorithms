function newNode(val) {
    this.val = val;
    this.next = null;
}
 
function SLList() {
    this.head = null;
}
 
SLList.prototype.addFrontAndBack = function(value) {
    var node = new newNode(value),
        currentNode = this.head;

    if (!currentNode) {
        this.head = node;
        return node;
    }
 
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = node;
    this._length++;
    return node;
}

SLList.prototype.contains = function(val) {
    var currentNode = this.head
    var count = 0;
    var length = this._length;

    while (count <= val) {
        if(currentNode.val === val){
            return currentNode.val;
        }
        currentNode = currentNode.next;
        count++;
    }
    return null;
}

SLList.prototype.remove = function(position){
    var currentNode = this.head;
    var length = this._length;
    var count = 0;
    var beforeNodeToDelete = null;
    var nodeToDelete = null;
    var deletedNode = null;

while (count < position) {
    beforeNodeToDelete = currentNode;
    console.log(beforeNodeToDelete.val)
    nodeToDelete = currentNode.next;
    console.log(nodeToDelete);
    count++;
}

beforeNodeToDelete.next = nodeToDelete.next;
console.log(beforeNodeToDelete.val);
deletedNode = nodeToDelete;
console.log(deletedNode.val);
nodeToDelete = null;
this._length--;

return deletedNode;
}

var x = new SLList();
console.log(x.addFrontAndBack(1));
console.log(x.addFrontAndBack(2));
console.log(x.addFrontAndBack(100));
console.log(x.addFrontAndBack(5));
console.log(x.addFrontAndBack(90));
console.log(x.addFrontAndBack(79));
console.log(x.contains(5));
console.log(x.remove(3));
