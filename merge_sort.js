function merge(left, right){
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
    }
  }

  var remaining = i === left.length ? right.slice(j) : left.slice(i);

  return merged.concat(remaining);
}



function mergeSort(array){

  if(array.length < 2){
    return array;
  }

  var halfway = Math.floor(array.length/2);
  var left = array.slice(0, halfway);
  var right = array.slice(halfway);

  return merge(mergeSort(left), mergeSort(right));

}

console.log(mergeSort([5, 3, 6, 1, 8, -5, 100, 2, 3, -6]));
