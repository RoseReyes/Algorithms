function HT() {
    this.arr = Array(5).fill(null);
    this.len = 0;
}

HT.prototype.hash = function (key){
    var hash = 0;
    if (key.length == 0) return hash;
    for (i = 0; i < key.length; i++){
        char = key.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; 
    }
    console.log("this is the hash")
    return hash;
}

HT.prototype.resize = function () {
    var newArr = Array(this.arr.length * 2).fill(null);
    for (let i = 0; i < this.arr.length; i++){
        if(this.arr[i] != null){
            var idx = this.arr[i].key % this.arr.length;
            newArr[idx] = this.arr[i];
        }
    }
    this.arr = newArr;
}

HT.prototype.add = function (key, val) {
    var hashed = this.hash(key);
    var idx = hashed % this.arr.length;

    if(Math.floor(this.arr.length / 2) <= this.len) {
        this.resize();
    }
    if(this.arr[idx] == null){
        this.arr[idx] = { key: hashed, value: val};
        this.len++;
    } else {
        while (this.arr[idx] != null){
            idx++;
        }
        this.arr[idx] = {key: hashed, value: val};
        this.len++;
    }
    return this.arr;
}

function Node(key, val){
    this.val = val;
    this.key = key;
    this.next = null;
}

HT.prototype.chaining = function(key, val){
    var hashed = this.hash(key);
    var idx = hashed % this.arr.length;
    if(this.arr[idx] == null){
        this.arr[idx] = new Node(key, val);
        console.log(this.arr[idx], "this is arr[idx");
        console.log(this.arr);
    } else {
        var newNode = new Node(key, val);
        console.log(this.arr[idx], "this is arr[idx]2");
        newNode.next = this.arr[idx];
        this.arr[idx] = newNode;
        console.log(this.arr, "this is after adding new node in the sam index");
    }
}

var hashT = new HT();
hashT.add('Ted', '513-571-6987')
hashT.add('Juliet', '425-555-6666')
hashT.add('Keith', '534-562-9561')
hashT.add('Gina', '513-571-6987')

console.log(hashT.add('Tim', '252-256-8458'))
console.log(hashT.add('Rose', '590-123-456'));
console.log(hashT.add('Tim', '590-123-457'));
console.log(hashT.add('Alex', '590-123-458'));
console.log(hashT.add('Sun', '590-123-459'));
console.log(hashT.add('Chanty', '590-123-460'));


