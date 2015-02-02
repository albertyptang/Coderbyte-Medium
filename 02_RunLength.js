//Go through string to check for repeats

function RunLength(str) { 
  var newstr = "";
  var lettercount = 1;
  for (var i=0; i<str.length; i++){
    if (str.charAt(i).toLowerCase()===str.charAt(i+1).toLowerCase())
      lettercount++;
    else {newstr += lettercount+str.charAt(i).toLowerCase();
          lettercount = 1;
    }
  }

  // code goes here  
  return newstr; 
         
}
   
