// Find the smallest number
//function that takes an array of numbers and return the smallest number
function smallestNum(array) {
  let smallestN;
  for (i = 0; i < array.length; i++) {
    if (smallestN === undefined) {
      smallestN = array[i];
    } else if (smallestN > array[i]) {
      smallestN = array[i];
    }
  }
  return smallestN;
}
console.log("Smallest number: " + smallestNum([1, 5, 8, 2]));

// Find the biggest number
//function that takes an array of numbers and return the biggest number
function biggestNum(array) {
  let biggestN;
  for (i = 0; i < array.length; i++) {
    if (biggestN === undefined) {
      biggestN = array[i];
    } else if (biggestN < array[i]) {
      biggestN = array[i];
    }
  }
  return biggestN;
}
console.log("Biggest Number: " + biggestNum([1, 5, 8, 3]));

//Count evens
//function tha takes an array of numbers and return the amount of even numbers in it
function countEvens(array) {
    let count = 0;
    for (i = 0; i < array.length; i++) {
      if(array[i] % 2 === 0){
         count +=1;
      }
    }
    return count;
  }
  console.log("Count Even: " + countEvens([1, 5, 8, 2, 12]));

  // remove duplicates from an array 
  // function that takes an array and returns an array with all duplicate elements removed
  function removeDups(array){
    let newArray = [];
    for(i = 0; i < array.length; i++){
        if(!newArray.includes(array[i])){
            newArray.push(array[i])
        }
    }
    return newArray
  }
  console.log("remove duplicate Number: " + removeDups([1,1,2,3]));
// add .includes to notes. it checks for duplicates ex^^

// How much is True 
//function that takes in an array if booleans and returns that number of true values present
function trueCount(array){
    let count = 0;
 for(i = 0; i< array.length; i++){
    if(!!array[i]){
        count+= 1;
    }
 }
 return count;
}
console.log("remove duplicate Number: " + trueCount([true, true, false, true]));
