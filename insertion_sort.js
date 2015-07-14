//Insertion sort


function insertionSort(array){

  var insert = function(array, rightIndex, value){
    for(var j=rightIndex; j>=0 && array[j] >value; j--){
      array[j + 1] = array[j];
    }
      array[j + 1] = value;
  };


  for(var i=1; i<array.length; i++){
    insert(array, i-1, array[i]);

  }

  return array;

}

console.log(insertionSort([-4, 9, 3, 6, -2, 6]));