//Create function which evaluates an expression in reverse polish notation.  
//If the expression is empty, return 0.

function calc(expr) {
  if(expr.length === 0){
    return 0;
  }
  
  var input = expr.split(" ");
  var stack = [];

  for(var i=0; i<input.length; i++){

      if(input[i] === "+"){
        var last = Number(stack.pop());
        var second = Number(stack.pop());
        var temp = last + second;
        stack.push(temp);
      } else if(input[i] === "-"){
        var last = Number(stack.pop());
        var second = Number(stack.pop());
        var temp = second - last;
        stack.push(temp);
      } else if(input[i] === "*"){
        var last = Number(stack.pop());
        var second = Number(stack.pop());
        var temp = second * last;
        stack.push(temp);
      } else if(input[i] === "/"){
        var last = Number(stack.pop());
        var second = Number(stack.pop());
        var temp = second/last;
        stack.push(temp);
      } else {
        stack.push(input[i])
      }
    
  }
  
  
  return Number(stack.pop());
}



console.log(calc("5 1 2 + 4 * + 3 -"));


