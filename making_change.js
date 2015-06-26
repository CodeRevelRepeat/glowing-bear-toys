//Given an amount of money and an array of possible coin denominations, how many different change possibilities are there?
//The order of coins do not matter so do not double count based on order and you have infinite quantity of coins.  

var countChangePossibles = function(money, coins){

  if(money <0 || coins.length === 0){
    return 0;
  } else if(money ===0){
    return 1;
  } else {

    return countChangePossibles(money-coins[0], coins) + countChangePossibles(money, coins.slice(1))
  }


}

console.log(countChangePossibles(4, [1, 2]));