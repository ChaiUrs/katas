
var talkingCalendar = function(date)
{
  var Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var output = new Date(date);
  var year = output.getFullYear(output);            // Takes the Year
  var month = Months[(output.getMonth(date))];     // Takes the Month
  var day = output.getDate();                     // Takes the Date
  var finalresult;

  if (day % 10 === 1 && (day/10 === 1 || 2 || 3))
  {
    switch (day)
    {
      case 11:
      finalresult = month + " " + day + "th, " + year;
      break;
      case 0:
      finalresult = month + "31st, " + year;
      break;
      default:
      finalresult = month + " " + day + "st, " + year;
    }
  }
  else if(day % 10 === 2 && (day/10 === 1 || 2 || 3))
  {
    switch (day)
    {
      case 12:
      finalresult = month + " " + day + "th, " + year;
      break;
      default:
      finalresult = month + " " + day + "nd, " + year;
    }
  }
  else if(day % 10 === 3 && (day/10 === 1 || 2 || 3))
  {
    switch (day)
    {
      case 13:
      finalresult = month + " " + day + "th, " + year;
      break;
      default:
      finalresult = month + " " + day + "rd, " + year;
    }
  }
  else
  {
    finalresult = month + " " + day + "th, " + year;
  }
  return finalresult;
};
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));