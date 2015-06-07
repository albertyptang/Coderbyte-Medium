function CaesarCipher(str,num) {
  // Account for numbers > 26 which should just loop around 
  num = num%26;
  var newstr = "";
  var arr = str.split("");
  for (var i=0; i < arr.length; i++) {
    var code = arr[i].charCodeAt(0);
    // if the character is a letter
    if ((code > 96 && code < 123) || 
    (code > 64 && code < 91)) {
      // if lowercase 
      if (arr[i] === arr[i].toLowerCase()) {
        if (code+num > 122) code-=26;
      }
      // if uppercase
      else if (code+num > 90) code-=26;
      newstr+= String.fromCharCode(code+num);
    }
    // if not a letter
    else newstr+=arr[i];
  }
  return newstr;          
}
   