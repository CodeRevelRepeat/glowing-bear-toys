// Create all permutations of an input string and remove duplicates, if present. 
// This means, shuffle all letters from the input in all possible orders.



function permutations(string) {

var results = [];

var combos = function(built, remains){

if(built.length === string.length){
  if(results.indexOf(built)<0){
    results.push(built)
  }
  return;
}

  for(var i=0; i<remains.length; i++){
    combos(built + remains[i], remains.slice(0, i) + remains.slice(i+1));
  }


}

combos('', string);


return results;
  
};

console.log(permutations('ab'));
console.log(permutations('abc'));