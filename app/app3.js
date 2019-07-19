

var Graph= function(){

    this.vertices=[];

    this.addVertex=function(vertex){

        this.vertices.push(vertex);
    }
}

Graph.prototype.printVertex=function(){

    for(var i=0;i<3;i++)
        {
            console.log(this.vertices[i]);

        }
}




//graph.printVertex();

var DirectedGraph=function(){
//Graph.call(this)
this.direction=0;

}

DirectedGraph.prototype=new Graph()
//DirectedGraph.prototype=object.create(Graph.prototype)
//DirectedGraph.prototype.constructor=DirectedGraph

DirectedGraph.prototype.setDirection=function(char){

    this.direction=char;

}

DirectedGraph.prototype.getDirection=function(){
    
       return this.direction;
    
    }

var graph= new DirectedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.setDirection(2);
console.log(graph.getDirection());
graph.printVertex();



