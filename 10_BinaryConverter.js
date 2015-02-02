//Counting binary is just adding powers of 2. Eg. 1111= 8+4+2+1= 15, 11010=16+8+_+2+_=26
function BinaryConverter(str) {
  var sum=0;
  for (var i=0; i<str.length; i++){
    if(str.charAt(i)==="1"){
    sum+= Math.pow(2,str.length-1-i);
    }
  }
  // code goes here  
  return sum; 
         
}
