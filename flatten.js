//Return flattened array

function flatten(arr) {

  var result = [];

  var recurse = function(array){

    for(var i=0; i< array.length; i++){
      if(Array.isArray(array[i])){
        recurse(array[i])
      } else {
        result.push(array[i]);
      }
    }

  };

  recurse(arr);

  return result;

};


console.log(flatten([[1], 2, [[3]], 5, [6], [[[[8]]]]]));

console.log(flatten([1,2,3,4,5]));