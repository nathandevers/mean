//Braces Valid
//Objectives:
//Exercise those logic muscles!
//Use data structures (arrays, objects) effectively to complete the challenge.
//Given a string, write a function that will determine whether the braces  - including parentheses (), square brackets [], and curly brackets {} - within the string are valid. That means that any braces within other braces must close before the outer set closes.

//HINT: Keep in mind that you may use arrays and objects to keep your information organized!

//Example: bracesValid("{{()}}[]") returns true because the inner braces close before the outer braces. Each opening brace has a matching closing brace.

//Example:  bracesValid("{(})") returns false because the curly braces close before the parentheses, which starts within the curly braces, had a chance to close.

function BracesValid(s){
    var braces = "[]{}()",
      stack = [], //braces stack
      i, //Index in the string
      c; //Character in the string
  
    for (i = 0; c = s[i++];)
    {
      var bracePosition = braces.indexOf(c),
        braceType;
      //~ is truthy for any number but -1
      if (!~bracePosition)
        continue;
  
      braceType = bracePosition % 2 ? 'closed' : 'open';
  
      if (braceType === 'closed')
      {
        //If there is no open parenthese at all, return false OR
        //if the opening parenthese does not match ( they should be neighbours )
        if (!stack.length || braces.indexOf(stack.pop()) != bracePosition - 1)
          return false;
      }
      else
      {
        stack.push(c);
      }
    }
    //If anything is left on the stack <- not balanced
    return !stack.length;
  }
  
  BracesValid(('{}([])'));
  //BracesValid(('{{'));
  //BracesValid(('[(])'));
  //BracesValid(("{}([])"));
  //BracesValid(("([}])"));
  //BracesValid(("([])"));
  //BracesValid(("()[]{}[][]"));