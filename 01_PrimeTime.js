//Check if any number from 2 to num can divide it without a remainder

function PrimeTime(num) { 
  for (var i =2; i<num; i++){
    if(num%i===0)
      return false;
      }
  // code goes here  
  return true;
         
}
