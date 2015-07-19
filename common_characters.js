/**
 * Write a function which takes any number of strings as arguments and returns a
 * string containing the characters found in all of the strings (without duplication), in the
 * order that they appeared in the first string.

 **/



 var commonCharacters = function(string1, string2){

  var args = Array.prototype.slice.call(arguments, 0);

  var obj = {};

  //Remove duplicates from each word by converting to object and then incrementing overall object if a 
  //letter appears at least once in the given word

  for(var i=0; i<args.length; i++){

    var wordObj = {};

    for(var j=0; j<args[i].length; j++){

      wordObj[args[i][j]] = true;

    }

    for(var key in wordObj){
      if(obj[key]){
        obj[key]++
      } else {

        obj[key] = 1;
      }

    }
  }

  //Find out which letters were repeated in every word:

  var hitNum = {};

  for(var x in obj){
    if(obj[x] ===args.length){
      hitNum[x] = true;
    }
  }

  //Build up return value string in order of first string parameter:

  var result = "";

  for(var k=0; k<string1.length; k++){
    if(hitNum[string1[k]]){
      result = result + string1[k];
    }
  }

  return result;

 };



 console.log(commonCharacters('acexivou', 'aegihobu', "aei"));


