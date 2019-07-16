
var camelCase = function(input)
{
  var caseResult = '';
  for (var i = 0; i < input.length; i++)
  {
    if(input.charAt(i) === ' ')
    {
      caseResult += (input.charAt(i + 1).toUpperCase());
      i++;
    }
    else
    {
      caseResult += input.charAt(i);
    }  
  }
  return caseResult;
};
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
