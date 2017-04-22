// Setup
var testString = "There 2 9 12 4 5 34 56 78 this is just more words that I am adding 6 in here just for 3 testing purposes are 3 cats but 4 dogs.";

// Only change code below this line.

var expression = /\d+/g;  // Change this line

// Only change code above this line

// This code counts the matches of expression in testString
var digitCount = testString.match(expression).length;

console.log(testString);
console.log(digitCount);
