//Change strings to array that are lowercase and sorted
function StringScramble(str1,str2) {
  var count = str1.length;
  str1 = str1.toLowerCase().split("").sort();
  str2 = str2.toLowerCase().split("").sort();
  console.log(str1);
  for (var i=0;i<count;i++){
      if(str1[0]===str2[0]){
          str1.shift();
          str2.shift();
      
      }
      else {
      str1.shift();
      }
  }
  console.log(str2);
  //Note that for whatever reason setting if(str2===[]) does not work, even if it is empty
  if (str2.length>0) return false;
    else return true; 
}
