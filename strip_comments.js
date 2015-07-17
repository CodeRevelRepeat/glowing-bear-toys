// Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
//Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"



function solution(input, markers){
  var array = input.split("\n");
  var revised = [];
  
  for(var i=0; i< array.length; i++){
    var temp = "";
     for(var j=0; j<array[i].length; j++){
       if(markers.indexOf(array[i][j]) > -1){
         break;
       } else{
         temp = temp + array[i][j];
       }
     }
      temp = temp.trim();
      revised.push(temp);
  
  }
  
   return revised.join("\n");
}



var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
console.log(result);