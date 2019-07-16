
const urlEncode = function(text)
{
  var encodedstring = [];
  for (var i = 0; i < text.length; i++)
  {
    if (text[i] === " ")
    {
      encodedstring += "%20";
    }
    else
    {
      encodedstring += text[i];
    }
  } 
  return encodedstring;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
