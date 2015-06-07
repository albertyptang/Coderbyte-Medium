function NumberSearch(str) { 

  // code goes here  
  var numberSum = 0;
  var letterCount = 0;
  for (var i=0; i<str.length; i++){
    if (str.charAt(i) === ' ') continue;
    if (!isNaN(str.charAt(i))) numberSum+= parseInt(str.charAt(i));
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) letterCount++;
    if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) letterCount++;
  }
  return Math.round(numberSum/letterCount);  
}
