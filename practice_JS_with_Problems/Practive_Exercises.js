console.log("------------THIS IS THE EASY SECTION---------------");
//Q1- sum if two numbers
// function that takes in two numbers and returns the sum of them
function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}
console.log("Sum is: " + sumOfTwoNumbers(1, 2));

//Q2 Covert Hours into seconds
//function that converts hours to seconds
//let seconds = 3600;
function hoursIntoSeconds(hours) {
  return hours * 60 * 60;
}
console.log("Seconds is: " + hoursIntoSeconds(3));

//Q3 calculate the perimeter of a rectangle
// function that take the length and width of a rectangle and returns its perimeter
// (L*2)+ (W*2)
function calculatePerimeter(length, width) {
  return length * 2 + width * 2;
}
console.log("Perimeter is: " + calculatePerimeter(3, 12));

//Q4 calculate the area of a triangle
//function that takes the base and height of a triangle and returns its area
function calculateArea(base, height) {
  return 0.5 * base * height;
}
console.log("Area is: " + calculateArea(4, 3));

//Q5 add to a string
// function that takes in a string and addes "New" to the beginning of it

function addToString(string) {
  return "New " + string;
}
console.log("New String is: " + addToString("Hello"));

//Q6 Sum Of Two Number Greater than 150
// function that takes in two numbers and returns true if their is a greater than 150
function greterThan150(num1, num2) {
  let sum = num1 + num2;
  if (sum >= 150) {
    return true;
  }
  return false;
}
console.log("Sum is: " + greterThan150(50, 50));

//Q7 greater than or equal to zero
//function that takes  in a number and returns true if they're greater than or equal to 0
function greaterThanEqualTozero(num) {
  return num >= 0;
}
console.log("Greater than is: " + greaterThanEqualTozero(-1));

//Q8 Inverted Boolean
//function that takes in a boolean (true or false) and return the inverted boolean
function invertedBoolean(bool) {
  return !bool;
}
console.log("invered is: " + invertedBoolean(false));

//Q9 is not the number 1
//function that takes in any value and returns true if its NOT the number 1
function isNotOne(num) {
  return num !== 1;
}
console.log("Not 1 is: " + isNotOne(2));

//Q10 calculate the remainder
//function that takes in two numbers and returns their remainder when divided by each other
function calculateRemainder(num1, num2) {
  return num1 % num2;
}
console.log("Remainder is: " + calculateRemainder(12, 5));

//Q11 is the number even
//Function that takes in a number and returns true if the number is even
function isEven(num) {
  return num % 2 === 0;
}
console.log("Even or Not: " + isEven(4));

//Q12 if a number is even, return 3, otherwise return -3
// function that takes a number argument and returns 3 if the number is even. if the number is odd return -3
function evenNumber(num) {
  return num % 2 === 0 ? 3 : -3;
}
console.log("numEven is: " + evenNumber(14));

//Q13 check if a user is logged in AND subscribed
//function that takes in two strings. if the first string is equal to "loggedin" AND the second string is equal to "subscribed", return true. Otherwise, return false
function isLoggedInAndSubscribed(val1, val2) {
  return val1 === "loggedIn" && val2 === "subscribed";
}
console.log(
  "User Status is: " + isLoggedInAndSubscribed("loggedIn", "subscribed")
);
//Q13 check if a user is logged in AND subscribed
//function that takes in two strings. if the first string is equal to "loggedin" AND the second string is equal to "subscribed", return true. Otherwise, return false
function isLoggedInOrSubscribed(val1, val2) {
  return val1 === "loggedIn" || val2 === "subscribed";
}
console.log(
  "User Status is: " + isLoggedInOrSubscribed("loggedIn", "subscribed")
);

// Intermediate section
console.log("------------THIS IS THE INTERMEDIATE SECTION-----------");

//Q1 Truthy or Falsy
//Function that takes in two values and returns the first one if its falsy, otherwise return the second one
function truthyOrFalsy(val1, val2) {
  return !val1 ? val1 : val2;
}
console.log("True right, false left: " + truthyOrFalsy(0, 2));

//Q2 array length
// function that takes an array and returns its length
function arrayLength(array) {
  return array.length;
}
console.log("Array is: " + arrayLength([1, 5, 3]));

//Q3 last element in array
// function that takes an array and returns the last element
function arrayLength2(array) {
  return array[array.length - 1];
}
console.log("last array: " + arrayLength2([1, 5, 8, 3]));

//Q4 array sum
// function that takes an array and returns the sum of every element

function arraySum(array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
console.log("Array Sum: " + arraySum([1, 5, 8, 3]));

//Q5 Progressive Sum
//Function that takes a number and adds up all the numbers from 1 to the given number.
//E.g. An input of 3 will give you 1 + 2 + 3, which equals 6

let sum = 0;
function ProgressiveSum(num) {
  for (i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log("Sum of Num: " + ProgressiveSum(3));

//Q6 Calculate Time
// function that takes in a number of seconds and returns it in mm:ss format
function calculateTime(seconds) {
  let timeM = Math.floor(seconds / 60);
  let timeS = seconds % 60;
  if ((timeM.toString().length = 1)) {
    timeM = "0" + timeM;
  }

  return timeM + ":" + timeS;
}
console.log("Timer min: " + calculateTime(73));

//Q7 Find the largest number
//Function that takes in an array and returns the largest number
function findLargestNum(array) {
  let max = array[0];
  for (i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

console.log("Largest number: " + findLargestNum([1, 3, 2, 4]));

//Q8 reverse String
// function that takes in a string and returns a reversed version
//increamenting for loop
function reverseString(val) {
  let reverseString = "";
  for (i = 0; i < val.length; i++) {
    reverseString = val[i] + reverseString;
  }
  return reverseString;
}
console.log("Reverse: " + reverseString("Adonay"));
//array reverse property
// use the .split to make it in to a countable array
// use the .reverse to make it backwords
function reverseString2(val) {
  return val.split("").reverse().join("");
}
console.log("Reverse property method: " + reverseString2("Adonay"));

//Q9 turn all elements in an array into 0
//function thay takes in an array and returns an array of 0's of the same length
// for loop way
function turnToZeros(array) {
  for (i = 0; i < array.length; i++) {
    array[i] = 0;
  }
  return array;
}
console.log("Turn to Zeros: " + turnToZeros([true, true, true]));
// fill solution
function turnToZerosFill(array) {
  return new Array(array.length).fill(0);
}
console.log("Turn to Zeros using FIll: " + turnToZerosFill([true, true, true]));
//Map solution
function turnToZerosMap(array) {
  return array.map((out) => (out = 0));
}
console.log("Turn to Zeros using Map: " + turnToZerosMap([true, true, true]));

//Q10 filer out all the oranges
//function that takes in an array of fruits and removes all oranges from the array.
function removeOranges(array) {
  return array.filter((out) => out !== "Orange");
}
console.log(
  "Remove using filter: " +
    removeOranges(["Banana", "Orange", "Orange", "Apple"])
);

//Q11 Filter out all falsy values
//Function that takes an array of values, filters out all the falsy values and only returns the truthy values
//for Loop method
function filterOutFalsyLoop(array) {
  let truthyArr = [];
  for (i = 0; i < array.length; i++) {
    if (!!array[i] === true) {
      truthyArr.push(array[i]);
    }
  }
  return truthyArr;
}

console.log("Find the falsy Loop: " + filterOutFalsyLoop([0, "", 1, 2]));

//Filter method
function filterOutFalsyFilter(array) {
  return array.filter((out) => !!out === true);
}

console.log("Find the falsy Filter: " + filterOutFalsyFilter([0, "", 1, 2]));

//Q12 truthy to true, falsy to false
// function that takes in array of truthy and falsy values, return the same array of elements into its boolean values
function convertToBooleanLoop(array) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray.push(!!array[i]);
  }
  return newArray;
}
console.log(
  "change falsy or truthy: " + convertToBooleanLoop([500, 0, "adonay", "", []])
);
// map method
function convertToBooleanMap(array) {
  return array.map((out) => !!out);
}
console.log(
  "change Map method falsy or truthy: " +
    convertToBooleanMap([500, 0, "adonay", "", []])
);



