function PrimeChecker(num) { 

  // code goes here 
  var arr = num.toString().split("");
  var length = arr.length;
  var prime = 0;
  
  var primeCheck = function(num){
    if (num === 2 || num === 3) return true;
    else if (num < 5) return false;
    for (var i=2; i <= Math.sqrt(num); i++){
      if (num%i === 0) return false;
    }
    return true;
  };
  
  var swapper = function(str, array){
    if (prime) return 1;
    if (array.length === 0) {
        console.log(str);
        if ( primeCheck(parseInt(str)) ) prime = 1;
        return;
    }
    for (var i=0; i < array.length; i++){
        var temp = array.slice();
        var add = array[i];
        temp.splice(i,1);
        swapper(str+add, temp);
    }
  };
  
  swapper("",arr);
  return prime;
}        
