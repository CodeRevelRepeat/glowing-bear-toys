// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]


var snail = function(array) {

  var result = [];
  
  if(!array[0][0]){return result};
  
  var startRowIndex = 0;
  var endRowIndex = array.length-1;
  var startColumnIndex = 0;
  var endColumnIndex = array.length-1;
  
  while(endRowIndex >= startRowIndex && endColumnIndex >= startColumnIndex){
    
    //Go right
    
    for(var i=startColumnIndex; i<= endColumnIndex; i++){
      result.push(array[startRowIndex][i])
    }
    
    startRowIndex++;
  
  //Go down
    
    for(var j = startRowIndex; j<= endRowIndex; j++){
      result.push(array[j][endColumnIndex]);
    }
    
    endColumnIndex--;

    
    //Go left
   
   if(startRowIndex <= endRowIndex){
     for(var k=endColumnIndex; k>=startColumnIndex; k--){
       result.push(array[endRowIndex][k]);
     }
   
   }
    endRowIndex--;
    
    //Go up
    
    if(startColumnIndex <= endColumnIndex){
      for(var l = endRowIndex; l>=startRowIndex; l--){
        result.push(array[l][startColumnIndex]);
      }
      startColumnIndex++;
    
    }
  
  }
  
  
  return result;
};




var testarray = [[1,2,3],
         [4,5,6],
         [7,8,9]]
console.log(snail(testarray)) // [1,2,3,6,9,8,7,4,5]);


