// Find the longest word and print it in one line in a stepwise manner. 
// Separate each new step with a space. If there are several words of the same length 
// and they are the longest, 
// then print the first word from the list.


var stepwise = function(string){
  
  var arr = string.split(" "); 

  var longest = "";

  for(var i=0; i< arr.length; i++){
    if(arr[i].length > longest.length){
      longest = arr[i];
    }

  };

  var step = "";

  for(var j=0; j<longest.length; j++){
    var stars = [];
    for(var k=0; k<j; k++){
      stars.push("*")
    }
    
    step = step + stars.join("") + longest[j] + " ";

  }



  console.log(step);        
}

  


console.log(stepwise("cat dog hello"));