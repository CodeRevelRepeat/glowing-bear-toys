// Return the largest 5 digit number found within the number given.
// The input will be a string of only digits.  


function solution(digits){
  var array = digits.split("");

  var largest = 0;

  for(var i=0; i<array.length-4; i++){
    var num = Number(array.slice(i, i+5).join(""));
    console.log("num", num);
    if(num > largest){
      largest = num;
    }
  }



  return largest;
  
}


console.log(solution("23423085408203428"))