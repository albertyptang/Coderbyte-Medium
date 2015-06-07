function DashInsertII(num) { 

  // code goes here  
  var arr = num.toString().split("");
  var str = "";
  for (var i=0; i < arr.length; i++){
    if (i === arr.length-1) return str+arr[i];
    str+=arr[i];
    if (arr[i] === "0" || arr[i+1] === "0") continue;
    if (arr[i]%2!=0 && arr[i+1]%2!=0) str+='-';
    if (arr[i]%2==0 && arr[i+1]%2==0) str+='*';
  }
}