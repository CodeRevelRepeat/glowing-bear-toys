


function solution(roman){
  // complete the solution by transforming the 
  // string roman numeral into an integer  
  
  var nums = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000};
  
  var result = 0;
  
  for(var i=0; i<roman.length-1; i++){
    if(nums[roman[i]] >= nums[roman[i + 1]]){
      result = result + nums[roman[i]];
    } else {
      result = result - nums[roman[i]];
    
    }
    
  }

  result = result + nums[roman[roman.length-1]]
  
  
  return result;
};


console.log(solution("XIX"));
console.log(solution("XXI"));

