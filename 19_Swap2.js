function SwapII(str) { 

  // code goes here
  var arr = str.split("");
  var numberSwap;
  for (var i=0; i < arr.length; i++){
    
    // if this is a number
    if (!isNaN(arr[i]) & arr[i]!=' ') {
        // if numberSwap isn't defined and isn't followed by a number
        if (!numberSwap && arr[i+1] && isNaN(arr[i+1])) numberSwap = i;
        // else if numberSwap is defined
        else if (numberSwap) {
            var temp = arr[i];
            arr[i] = arr[numberSwap];
            arr[numberSwap] = temp;
            numberSwap = undefined;
        }
    }
    else if (arr[i].charCodeAt(0) > 64 && arr[i].charCodeAt(0) < 91)
      arr[i] = arr[i].toLowerCase();
    else if (arr[i].charCodeAt(0) > 96 && arr[i].charCodeAt(0) < 123)
      arr[i] = arr[i].toUpperCase();
    else numberSwap = undefined;
  }
  return arr.join(""); 
         
}
