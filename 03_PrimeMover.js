function PrimeMover(num) {
  var primecount = 0;
  var prime = function (a){
    for (var i=3; i<a; i++){
    if(a%i===0)return false;
    }
    return true;
  };
  for(var i=3; i>0; i++){
    if(primecount === num){return i-1}  //i-1 is the prime number because the prime check happens, then i++, then the if check happens
    else if(prime(i))primecount++;
  }             
}
