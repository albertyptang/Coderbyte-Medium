function TripleDouble(num1,num2) { 

  // code goes here  
    var count = function(num, times){
    var numstr = num.toString();
    var count = 1;
    for (var i = 0; i < numstr.length-1; i++){
        if (numstr.charAt(i) === numstr.charAt(i+1)) {
            count++;
            if (count >= times) return 1;
        }
        else count = 1;
    }
    return 0;
  };
  if (count(num1,3) && count(num2,2)) return 1;
  else return 0; 
         
}
