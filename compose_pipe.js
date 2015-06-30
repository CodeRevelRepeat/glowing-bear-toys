
//Implement the function pipeline.
//Pipeline returns the result from executing a series of functions on a seed argument.
//Executes the functions left to right.

//Implement the function compose.
//Compose returns a function that is made up of all of its function arguments.
//This resulting function may then be called on a seed argument.
//Executes the functions right to left.


function pipeline(seed) {
  // returns the result of the functions applied to the seed
  var args = Array.prototype.slice.call(arguments, 1);

  var pipe = function(seedling){
    var callOn = seedling;
    for(var i=0; i<args.length; i++){
      callOn = args[i](callOn);
    }
    return callOn;
  }
   return pipe(seed);
};


function compose() {
  // returns a function that will be applied to a seed eventually
  var args = Array.prototype.slice.call(arguments);

  return function(seed){
    var callOn = seed;
    for(var i=args.length-1; i>=0; i--){
      callOn = args[i](callOn);

    };
    return callOn;
  }
};






   var greet = function(name){ return 'hi: ' + name;}
   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
   var welcome = compose(greet, exclaim);
   console.log(welcome('scott')); // 'hi: PHILLIP!'

   console.log(pipeline(4, function(x){return 2 + x}, function(y){return 3 * y}))





