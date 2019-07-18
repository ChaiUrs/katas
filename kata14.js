
var squareCode = function(message)
{
  var reducedMessage = message.replace(/[^\w]/g, "").toLowerCase();

  /*
  ^ character - means NOT anything inside the [ ].
  eg: [^A-Za-z0-9_] - means every character that is not A-Z, or a-z, 0-9, or _
  
  \w - is a metacharacter used to find a word character.
  A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character.
  
  /g - is a modifier used to perform a global match.
  It causes the pattern to return all matches in the string, not just the first one.

  '' (single quote) or "" (double quotes) - global regular expression
  Replace the pattern with nothingness, i.e., remove the all non-alphanumeric characters 
  and convert all characters to lower case.
  */

  var input = reducedMessage.length;
  console.log("length_of_a_message:" + input);
  
  var columns = Math.ceil(Math.sqrt(input));
  /* by using the above function for the number of characters on each line (i.e.,for the number of columns), the text will be close to a square shape. */
  console.log("number_of_columns:" + columns);

  var secretText = "";

  for (var i = 0; i < columns; i++)
  { 
    for (var j = i; j < input; j = j + columns)
    {
      secretText = secretText + reducedMessage[j];
    }
    secretText = secretText + '\t';
  }
  return secretText + '\n';
}
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));


/* Expected Output:
clu hlt io  
fto ehg ee dd
hae and via ecy
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau 
*/
