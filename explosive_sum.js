// Given an integer, return the total number of combos of sums of integers can make that number.


// Examples

// Trivial

// sum(-1) // 0
// sum(1) // 1
// Basic

// sum(2) // 2  -> 1+1 , 2
// sum(3) // 3 -> 1+1+1, 1+2, 3
// sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
// sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3

// sum(10) // 42
// Explosive

// sum(50) // 204226
// sum(80) // 15796476
// sum(100) // 190569292



function sum(num) {
  if(num <1){
    return 0;
  }
  

  
  var recurse = function(amountLeft, subtractAmount){
    if(amountLeft === 0){
      return 1;
    }

    if(amountLeft <0 || subtractAmount === 0){
      return 0;
    }

    return recurse(amountLeft - subtractAmount, subtractAmount) + recurse(amountLeft, subtractAmount -1);
    
  }

  return recurse(num, num);

  
}

console.log(sum(2));
console.log(sum(5));
console.log(sum(50));



