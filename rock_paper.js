

var rockPaper = function(rounds){

  var possibles = ["rock", "paper", "scissors"];

  var results = [];

  var recurse = function(game){

    if(game.length === rounds){
      results.push(game);
      return;
    }

    for(var i=0; i<possibles.length; i++){
      recurse(game.concat(possibles[i]));
    }

  };

  recurse([]);

  return results;

}


console.log(rockPaper(3));