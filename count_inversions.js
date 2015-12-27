// Count the number of occurrences in an array where a higher number appears before a lower number


function countInversions(array){

  var count = 0;
  
  var mergeAndCount = function(left, right){
    var i=0; //counter for left
    var j=0; //counter for right
    var merged = [];

    while(i < left.length && j < right.length){
      if (left[i] <= right[j]){
        merged.push(left[i]);
        i++
      } else {
        merged.push(right[j]);
        j++;
        count += left.length - i;
      }
    }

    var remaining = i === left.length ? right.slice(j) : left.slice(i);

    return merged.concat(remaining);

  }

  var divideAndConquer = function(array){

    if(array.length < 2){
      return array;
    }

    var halfway = Math.floor(array.length/2);
    var left = array.slice(0, halfway);
    var right = array.slice(halfway);

    return mergeAndCount(divideAndConquer(left), divideAndConquer(right));
  };

  divideAndConquer(array);

  return count;

}

console.log(countInversions([1, 3, 5, 2, 4, 6]));





