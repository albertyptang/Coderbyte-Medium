//Similar to ArrayAddition but this time I have to account for negatives
function ArrayAddition(arr) { 
  arr.sort(function(a,b){return a-b});
  var goal = arr.pop();
  //Create a loop that cuts off pieces of the array and either subtracts the goal by that amount or doesn't
  //The goal is to have an empty array with a sum of 0
  function SumCombo (sum,array){
    //If the array is empty, sum must be 0 to return true
    if (array.length === 0 ){return sum ===0;}
    var num  = array[0];
    //Duplicate the array and cut off a piece
    array = array.slice(1);
    //Either subtract the sum by the amount you cut off or don't
    return SumCombo(sum-num,array) || SumCombo(sum,array);
  }
  return SumCombo(goal,arr);      
}
