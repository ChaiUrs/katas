
var conditionalSum = function(values, condition)
{
  var even = 0;
  var odd = 0;
  if (condition === "even")
  {
    for(var i = 0; i < values.length; i++)
    {
      if (values[i] % 2 === 0)
      {
        even = even + values[i];
      }
    }
    return even;
  }
  else if (condition === "odd")
  {
    for(var i = 0; i < values.length; i++)
    {
      if (values[i] % 2 !== 0)
      {
        odd = odd + values[i];
      }
    }
    return odd;
  }
  else
  {
    return 0;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

