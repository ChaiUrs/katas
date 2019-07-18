
var multiplicationTable = function(maxValue)
{
  var border = "";
  var outputgenerated = "";
  for (var rows = 1; rows <= maxValue; rows++)
  {
    for (var columns = 1; columns <= maxValue; columns++)
    {
      var result = rows * columns;
      if(result <= 10)
      {
        outputgenerated += result + " ";
      }
      else if(result <= 100)
      {
        outputgenerated += result + " "; 
      }
    }
    outputgenerated += "\n" + border.repeat(maxValue) + "\n";
  }
  return (border.repeat(maxValue) + "\n") + outputgenerated;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
