// Complete the method to return true when its argument is an array that has the same nesting structure as the first array.

// For example:

//  // should return true
// [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
// [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

//  // should return false 
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// // should return true
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// // should return false
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
// For your convenience, there is already a function 'isArray(o)' declared in the JS version that returns true if its argument is an array, false otherwise.


Array.prototype.sameStructureAs = function (other) {
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.

    // Note: You are given a function isArray(o) that returns
    // whether its argument is an array.
    if(!Array.isArray(other)){
      return false;
    }
    
    var result = true;
    
    var recurse = function(array1, array2){
      if(!Array.isArray(array2)){
        result = false;
        return;
      }
      
      if(array1.length !== array2.length){
        result = false;
        return;
      }
      
      for(var i=0; i< array1.length; i++){
        if(Array.isArray(array1[i])){
          recurse(array1[i], array2[i]);
        }
      }
    }
    
    recurse(this, other);
    
    return result;
    
};


//trues
console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ));
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ));
console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ));


//falses
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ));
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] ));
console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ));


