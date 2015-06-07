function FormattedDivision(num1,num2) { 

  // code goes here
  var answer = num1/num2;
  var arr = answer.toString().split(".");
  var integer = "";
  var decimal = "";
  var integerArray = arr[0].split("");
  var count = 0;
  for(var i = arr[0].length-1; i>=0; i--){
    count++;
    integer = arr[0][i]+integer;
    if (count%3 === 0) integer = ','+integer;
  } 
  if (!arr[1]) decimal = '0000';
  else {
    var decimalArray = arr[1].slice(0,5).split("");
    console.log(decimalArray, decimal);
    for (var i = 0; i < 4 ; i++){
        if (!decimalArray[i]) decimal+="0";
        else if (i === 3 && decimalArray[i+1] && parseInt(decimalArray[i+1]) > 5) decimal+= (parseInt(decimalArray[i])+1).toString();
        else decimal+= decimalArray[i];
    }
  }
  return integer+"."+decimal; 
         
}