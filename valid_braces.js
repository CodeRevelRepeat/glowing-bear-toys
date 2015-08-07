function validBraces(braces){
  //TODO 
  var possibles = {"[": "]",
  "{": "}",
  "(": ")"};
  
  var closed = {"]": true, "}": true, ")": true};
  
  var stack= [];
  
  for(var i=0; i< braces.length; i++){
    if(possibles[braces[i]]){
      stack.push(possibles[braces[i]]);
    } else if(closed[braces[i]]){
     var test = stack.pop();
     if(braces[i] !== test){
       return false;
     }
    }
  
  }
  
  if(stack.length > 0){
    return false;
  }
  
  return true;
}


console.log(validBraces( "()" ));