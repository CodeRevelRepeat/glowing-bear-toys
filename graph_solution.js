//Return true if given an array of graphs/arcs with a start and an end, you can go 
//from the start and reach the end.  


function solve_graph(start, end, arcs) {
  
  var value = false;

  var recurse = function(start, visited){
  
    for(var i=0; i<arcs.length; i++){
      if(arcs[i].start === start){
        pointer = arcs[i];

        if(pointer.start === end){
          value = true;
        }
        
        currEnd = pointer.end;
    
        if(currEnd === end){
          value = true;
        } else if(visited.indexOf(currEnd) < 0){
          visited.push(currEnd);
          recurse(currEnd, visited);
        } 
      } 
    }

  };

  recurse(start, [])
  

  return value;
  
}


console.log(solve_graph("a", "c", [{start: "a", end: "b"}, {start: "b", end: "c"}]))

