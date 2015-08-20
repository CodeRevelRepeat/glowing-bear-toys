function toWeirdCase(string){
  //TODO
  let array = string.split(" ");
  let revArray = [];
  
  for(let i=0; i<array.length; i++){
    let word = array[i]
    let revWord = '';
    for(let j=0; j<word.length; j++){
      if(j % 2 === 0){
        revWord += word[j].toUpperCase();
      } else {
        revWord += word[j].toLowerCase();
      
      }
    
    }
    revArray.push(revWord);
  }
  
  
  return revArray.join(" ");
  
}


console.log(toWeirdCase('test testy testiest'));