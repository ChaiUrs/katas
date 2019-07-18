
var makeCase = function(input,font)
{
  var array_of_input = input.split("");
  var caseResult = " ";

  if(font.indexOf("camel") !== -1)
  {
    for (var i = 0; i < array_of_input.length; i++)
    {
      if(array_of_input[i] === " ")
      {
        array_of_input[i] = "";
        array_of_input[i + 1] = array_of_input[i + 1].toUpperCase();
      }  
    }
    caseResult = array_of_input.join("");
  }

  if (font.indexOf("pascal") !== -1)
  {
    array_of_input[0] = array_of_input[0].toUpperCase();
    for (i = 0; i < array_of_input.length; i++)
    {
      if(array_of_input[i] === " ")
      {
        array_of_input[i] = "";
        array_of_input[i + 1] = array_of_input[i + 1].toUpperCase();
      }  
    }
    caseResult = array_of_input.join("");    
  }

  if(font.indexOf("snake") !== -1)
  {
    for (i = 0; i < array_of_input.length; i++)
    {
      if(array_of_input[i] === " ")
      {
        array_of_input[i] = "_";
      }  
    }
    caseResult = array_of_input.join("");
  }

  if(font.indexOf("kebab") !== -1)
  {
    for (i = 0; i < array_of_input.length; i++)
    {
      if(array_of_input[i] === " ")
      {
        array_of_input[i] = "-";
      }  
    }
    caseResult = array_of_input.join("");
  }

  if (font.indexOf("title") !== -1)
  {
    array_of_input[0] = array_of_input[0].toUpperCase();
    for (i = 0; i < array_of_input.length; i++)
    {
      if(array_of_input[i] === " ")
      {
        array_of_input[i + 1] = array_of_input[i + 1].toUpperCase();
      }  
    }
    caseResult = array_of_input.join("");    
  }

  if (font.indexOf("vowel") !== -1)
  {
    for(i = 0; i < array_of_input.length; i++)
    {
      if(array_of_input[i] === "a" || array_of_input[i] === "e" || array_of_input[i] === "i" || array_of_input[i] === "o" || array_of_input[i] === "u")
      {
        array_of_input[i] = array_of_input[i].toUpperCase();
      }
    }
    caseResult = array_of_input.join("");
  }

  if (font.indexOf("consonant") !== -1)
  {
    for(i = 0; i < array_of_input.length; i++)
    {
      if(!(array_of_input[i] === "a" || array_of_input[i] === "e" || array_of_input[i] === "i" || array_of_input[i] === "o" || array_of_input[i] === "u"))
      {
        array_of_input[i] = array_of_input[i].toUpperCase();
      }
    }
    caseResult = array_of_input.join("");
  }

  if (font.indexOf("upper") !== -1)
  {
    for(i = 0; i < array_of_input.length; i++)
    {
      array_of_input[i] = array_of_input[i].toUpperCase();
    }
    caseResult = array_of_input.join("");
  }
  return caseResult;
} 
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

/* Expected Output:
thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING
*/

/* NOTE:
var makeCase = function(input)
{
  var array_of_input = input.split("");  
  // [ 't','h','i','s',' ','i','s',' ','a',' ','s','t','r','i','n','g' ]

  The split() method is used to split a string into an array of substrings, and returns the new array.
  If an empty string ("") is used as the separator, the string is split between each character.

  return array_of_input.join("");
  // this is a string

  The array.join() method is an inbuilt function, which is used to join the elements 
  of an array into a string.The elements of the string will be separated by a specified 
  separator and its default value is comma(, ).
}
console.log(makeCase("this is a string"));
*/

