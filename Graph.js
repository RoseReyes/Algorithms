class Graph {
    constructor(noOfVertices)
    {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    addVertex(value)
    {
        this.AdjList.set(value, []);
    }

    addEdge(value, w)
    {
        this.AdjList.get(value).push(w);
        this.AdjList.get(w).push(value);
    }

    printGraph()
    {
       var get_keys = this.AdjList.keys();

       for(var i of get_keys){
            var get_values = this.AdjList.get(i);
            var conc = "";

           for(var j of get_values){
                conc += j + " ";
                console.log(i + " -> " + conc);
           }
       }
    }

    bfs(startingNode)
    {
        var visited = [];
        for (var i = 0; i < this.noOfVertices; i++){
            visited[i] = false;
        }

        var q = new Queue();
        
        visited[startingNode] = true;
        q.enqueue(startingNode);

        while (!q.isEmpty()){
            var getQueueElement = q.dequeue();
            console.log(getQueueElement);
            var get_List = this.AdjList.get(getQueueElement);
            
            for (var i in get_List){
                var neigh = get_List[i];

                if(!visited[neigh]) {
                    visited[neigh] = true;
                    q.enqueue(neigh);
                }
            }
        }
    }
}

var g = new Graph(6);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

for(var i = 0; i < vertices.length; i++){
    g.addVertex(vertices[i]);
}

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

g.printGraph();


//======================================================================//
//Breadth-First-Search

g.bfs('A');

//credit: geekforgeeks