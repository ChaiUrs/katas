
var instructorWithLongestName = function(instructors)
{
  var LongestName = "";
  var instructor_index;
  var instructor_object;
  for(var i = 0; i < instructors.length; i++)
  {
    var nameLength = instructors[i].name;
    if(nameLength.length > LongestName.length)
    {
      LongestName = nameLength;
      instructor_index = LongestName.indexOf(LongestName[i]);
      instructor_object = instructors[instructor_index];
    }
  }
  return instructor_object;
};
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));