function CountingMinutes(str) { 

  // code goes here  
  var arr = str.split("-");
  var parseTime = function(time) {
      var Array = time.split(":");
      var parsedTime = 0;
      if(Array[0] != "12") parsedTime += 60*(parseInt(Array[0]));
      parsedTime+=parseInt(Array[1]);
      if(Array[1].charAt(2) === "p") parsedTime+=720;
      return parsedTime;
  };
  var diff = parseTime(arr[1])-parseTime(arr[0]);
  while (diff < 0) {
      diff = 1440+diff;
  }
  return diff;
}
