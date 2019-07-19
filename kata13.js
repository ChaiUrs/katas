
var urlDecode = function(text)
{
  var newText = text.split('&'); 
  /*split('&') method - is used to split a string into an array of substrings, and returns the new array by removing '&' character.
  eg: it returns [ 'city=Vancouver', 'weather=lots%20of%20rain' ] */
  
  var newObject = {};
  
  for (var i = 0; i < newText.length; i++)
  {
    var text_Attribute = newText[i].split('=');               
    text_Attribute[1] = text_Attribute[1].replace(/%20/g, " ");       //replaces '%20' character to " "
    newObject[text_Attribute[0]] = text_Attribute[1];
  }
  return newObject;
}
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);


/* Expected Output:
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
*/