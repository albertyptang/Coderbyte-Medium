function PermutationStep(num) { 

  // code goes here  
  var arr = num.toString().split("");

  for (var i = arr.length-2; i >= 0; i--){
      console.log(arr[i]);
      var swapped = false;
      var location;
      for (var j = i+1; j < arr.length; j++) {
          console.log("compared to "+arr[j]);
          if (arr[i] < arr[j]){
              var temp = arr[j];
              arr[j] = arr[i];
              arr[i] = temp;
              swapped = true;
              location = i;
              console.log(arr);
          }
      }
      if (swapped) {
          var part1 = arr.slice(0,i+1);
          var part2 = arr.slice(i+1).sort();
          return parseInt(part1.concat(part2).join(""));
      }
  }
  return -1;
         
}