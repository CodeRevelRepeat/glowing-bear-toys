//Selection sort/swap sort

var swap = function(array, index1, index2){
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};


var minIndexFinder = function(array, startIndex){
  var minIndex = startIndex;
  var lowest = array[startIndex];

  for(var i= startIndex + 1; i < array.length; i++){
    if(array[i] < lowest){
      minIndex = i;
      lowest = array[i];
    }

  }

  return minIndex;

};



var selectionSort = function(array){

  for(var i=0; i<array.length; i++){

    swap(array, i, minIndexFinder(array, i));

  }

  return array;

}


console.log(selectionSort([5, 2, -4, 7, 5]));


