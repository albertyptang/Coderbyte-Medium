function LetterCount(str) {
  var highestrepeat = 1;
  var highestrepeatword = "";
  var arr = str.split(" ");
  for (var i=0; i<arr.length;i++){
    for (var j=0; j<arr[i].length; j++){
      var repeat = 0;
      for (var k=0; k<arr[i].length;k++){
        if (arr[i].charAt(j).toLowerCase()===arr[i].charAt(k).toLowerCase()){
          repeat++;
        }
      }
      if(repeat>highestrepeat){
      highestrepeat = repeat;
      highestrepeatword = arr[i];}
    }
  }

  if(highestrepeat===1){return -1;}
  else return highestrepeatword; 
         
}
