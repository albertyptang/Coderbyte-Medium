//Simple loop with if
function Division(num1,num2) {
  for (var i = Math.max(num1,num2); i>=1; i--){
    if((num1%i===0)&&(num2%i===0)){return i;}
}
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Division(readline());           
