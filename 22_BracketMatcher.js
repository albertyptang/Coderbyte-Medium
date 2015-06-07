function BracketMatcher(str) { 

  // code goes here  
    var parenCount = 0;
    var closeParenCount = 0;
    var bracketCount = 0;
    var closeBracketCount = 0;
  for (var i = 0; i < str.length; i++){
    var x = str.charAt(i);
    if (x==='(') parenCount++;
    if (x===')') closeParenCount++;
    if (x==='[') bracketCount++;
    if (x===']') closeBracketCount++;
  }
  if (parenCount === closeParenCount && bracketCount === closeBracketCount) return 1;
  else return 0;
}
