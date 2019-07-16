
/*
const repeatNumbers = function(data)
{
  return data.map(([n, count]) => n.toString().repeat(count)).join(',');
}
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
 */

const repeatNumbers = function(data)
{
  var finalArray = [];
  for (var i = 0; i < data.length; i++)
  {
    var arr1 = data [i] [0];
    var arr2 = data [i] [1];
    for (var x = arr2; x > 0; x--)
    {
      finalArray += arr1;
      if (x === 1 && i < data.length - 1)
      {
        finalArray += ',';
      }
    }
  }
  return finalArray;
};
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

