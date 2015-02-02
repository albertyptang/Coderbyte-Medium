function ArithGeoII(arr) { 
  var arith = true;
  var geo = true;
  for(var i=0;i<arr.length-2;i++){
    if((arr[i+1]-arr[i])!=(arr[i+2]-arr[i+1])){
      arith = false;
    }
  }
  for(var i=0;i<arr.length-2;i++){
    if((arr[i+1]/arr[i])!=(arr[i+2]/arr[i+1])){
      geo = false;
    }  
  }
  if (arith===true)return "Arithmetic";
  else if (geo===true)return "Geometric";
  else return -1;         
}
   
