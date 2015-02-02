function PalindromeTwo(str) { 
  var newstr = "";
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  //Create a new string without punctuation and all lowercase letters
  for (var i=0; i<str.length;i++){
    for (var j=0; j<alphabet.length;j++){
    if(str[i].toLowerCase()===alphabet[j])
       newstr+=str.charAt(i).toLowerCase();
    }
  }
  //Reverse the string and check if the newstr and rev are equal
  var rev = "";
  for (var i=(newstr.length-1); i>=0; i--){
    rev+=newstr.charAt(i);}
  console.log(rev);
  if (rev === newstr){return true;}
  else return false;        
}
