
var calculateChange = function(total, cash)
{
  var denominations = {'twentyDollar': 2000, 'tenDollar': 1000, 'fiveDollar': 500, 'twoDollar': 200, 
  'oneDollar': 100, 'quarter': 25, 'dime': 10, 'nickel': 5,'penny': 1};
  var totalChange = cash - total;
  return getChangeAmounts(totalChange, denominations);
};
var getChangeAmounts = function(totalChange, denominations)
{
  var remainder = totalChange;
  var finalChange = {};
  for (var denominationName in denominations) 
  {
    if (denominations.hasOwnProperty(denominationName))
    {
      var denominationValue = denominations[denominationName];
      if (remainder >= denominationValue)
      {
        finalChange[denominationName] = Math.floor(remainder / denominationValue);
        remainder = remainder % denominationValue;
      }
    }
  }
  return finalChange;
  };

  console.log(calculateChange(1787, 2000));
  console.log(calculateChange(2623, 4000));
  console.log(calculateChange(501, 1000));
