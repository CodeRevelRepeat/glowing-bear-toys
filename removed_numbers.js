// In a sequence of numbers from 1 to n (n > 0 given) a friend of mine 
// has removed two numbers but he tells me that the product of the two removed numbers 
// is equal to the sum of the numbers he left in the sequence.

// Return an array of all possible removed numbers sorted in increasing order based on value of
// the first number.


//Recursive solution

function removeNb (n) {

  var results = [];
  var sum = 0;
  var arr = [];

  for(var i=0; i<=n; i++){
    sum = sum + i;
    arr.push(i);
  }


  var recurse = function(array){
    if(array.length === 1){
      return;
    }

    var first = array[0];

    for(var j=1; j<array.length; j++){
      if(first * array[j] === (sum - (first + array[j]))){
        results.push([first, array[j]]);
        results.push([array[j], first]);
      }

    }

    array.shift();
    recurse(array);


  }


  recurse(arr);

  return results.sort(function(a, b){ return a[0] - b[0]});


}


//Iterative solution


function removeNb (n) {

  var results = [];
  var sum = 0;

  for(var i=1; i<=n; i++){
    sum = sum + i;
  }


  for(var k=1; k<n; k++){
    var first = k;
    for(var j=k +1; j<=n; j++){
      var second = j;
      if(first * second === (sum - (first + second))){
        results.push([first, second]);
        results.push([second, first]);
      }

    }
  }



  return results.sort(function(a, b){ return a[0] - b[0]});


}




console.log(removeNb(26));


