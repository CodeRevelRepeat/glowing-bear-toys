//Given a string, return all anagrams for that string.


var allAnagrams = function(string){

  var results = [];

  var recurse = function(str, remains){

    if(str.length === string.length){
      results.push(str);
      return;
    }

    for(var i=0; i< remains.length; i++){
      recurse(str + remains[i], remains.slice(0, i) + remains.slice(i+1))

    }


  };

  recurse('', string);

  return results;


};


console.log(allAnagrams("abcd"))