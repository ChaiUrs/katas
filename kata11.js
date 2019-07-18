
var organizeInstructors = function(instructors)
{
  var output_of_object = { };
  for(var i = 0; i < instructors.length; i++)
  {
    var nameofInstructors = instructors[i].name;
    var courseName = instructors[i].course;
    
    if(courseName in output_of_object)
    {
      output_of_object[courseName].push(nameofInstructors);
    }
    else
    {
      output_of_object[courseName] = [nameofInstructors];
    }
  }
  return output_of_object;
};

console.log(organizeInstructors([
{name: "Samuel", course: "iOS"},
{name: "Victoria", course: "Web"},
{name: "Karim", course: "Web"},
{name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
{name: "Brendan", course: "Blockchain"},
{name: "David", course: "Web"},
{name: "Martha", course: "iOS"},
{name: "Carlos", course: "Web"}
]));
