function Consecutive(arr) { 

  // code goes here  
  var temp = arr.slice()
  temp.sort(function(a,b){return a-b});
  var count = 0;
  for (var i = 1 ; i < temp.length; i++){
    count = count+temp[i]-temp[i-1]-1;
  }
  return count; 
    
}