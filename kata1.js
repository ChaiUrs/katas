
/* Example : Sort an array alphabetically, and then reverse the order of the sorted items (descending):

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();    // [Apple, Banana, Mango, Orange]
fruits.reverse(); // [Orange, Mango, Banana, Apple] */ 


var sumLargestNumbers = function(data)
{
    var sortedData = data.sort((a,b) => a-b);              //sorts the given array (ascending to descending)
    var reversedSortedData = sortedData.reverse();         //reverses the sorted array (descending to ascending)
    return reversedSortedData[0] + reversedSortedData[1];  //adds the first two highest numbers 
};
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
