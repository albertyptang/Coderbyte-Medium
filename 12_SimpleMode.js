function SimpleMode(arr) { 

  // code goes here 
  var test = {};
  var highest = 0;
  var highestnumber;
  for (var i = 0 ; i < arr.length ; i++){
    var count = 0;
    for (var j = 0; j < arr.length; j++){
      if (arr[i]===arr[j]) count++;
      if (count>highest) {
        highest = count;
        highestnumber = arr[i];
      }
    }
  }
  if (highest === 1) return -1;
  return highestnumber;
}