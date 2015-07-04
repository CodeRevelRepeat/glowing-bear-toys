//Test to see if a 2d array representing a 9x9 sodoku board represents a winning game.  Return true if so, false if not.

//A winning game has each of 1-9 in each row, each column and each 3x3 block.





function validSolution(board){

  var checker = [1, 2, 3, 4, 5, 6, 7, 8, 9];


  //check rows

  for(var i=0; i<board.length; i++){
    var row = board[i].slice().sort();

    for(var j=0; j< row.length; j++){
      if(row[j] !== checker[j]){
        return false;
      }
    }
  };



  //check columns

  for(var k=0; k<board.length; k++){

    var column = [];

    for(var q=0; q< board.length; q++){
      column.push(board[k][q]);

    }

    column.sort();

    for(var r=0; r< column.length; r++){
      if(column[r] !== checker[r]){
        return false;
      }
    }
  }

  //check blocks

    //loop through blocks vertically
  for(var a=0; a<9; a+=3){

    //loop through blocks horizontally
    for(var c=0; c<9; c+=3){
       var block = [];
      //loop through rows within each block
      for(var b=a; b<(3+a); b++){
        
        //loop through columns within each block row

        for(var d=c; d<(3+c); d++){

          block.push(board[b][d]);

        } 

      }

      block.sort();
      for(var s=0; s< block.length; s++){
        if(block[s] !== checker[s]){
          return false;
        }
      }

    }

  }

  return true;

};



console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
               [6, 7, 2, 1, 9, 5, 3, 4, 8],
               [1, 9, 8, 3, 4, 2, 5, 6, 7],
               [8, 5, 9, 7, 6, 1, 4, 2, 3],
               [4, 2, 6, 8, 5, 3, 7, 9, 1],
               [7, 1, 3, 9, 2, 4, 8, 5, 6],
               [9, 6, 1, 5, 3, 7, 2, 8, 4],
               [2, 8, 7, 4, 1, 9, 6, 3, 5],
               [3, 4, 5, 2, 8, 6, 1, 7, 9]]));



console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
               [6, 7, 2, 1, 9, 0, 3, 4, 8],
               [1, 0, 0, 3, 4, 2, 5, 6, 0],
               [8, 5, 9, 7, 6, 1, 0, 2, 0],
               [4, 2, 6, 8, 5, 3, 7, 9, 1],
               [7, 1, 3, 9, 2, 4, 8, 5, 6],
               [9, 0, 1, 5, 3, 7, 2, 1, 4],
               [2, 8, 7, 4, 1, 9, 6, 3, 5],
               [3, 0, 0, 4, 8, 1, 1, 7, 9]]));

