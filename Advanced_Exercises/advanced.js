// Find the smallest number
//function that takes an array of numbers and return the smallest number
function smallestNum(array) {
  let smallestN;
  for (i = 0; i < array.length; i++) {
    if (smallestN === undefined) {
      smallestN = array[i]
    }
    else if (smallestN > array[i]){
        smallestN = array[i]
    }
  }
  return smallestN;
}
console.log(smallestNum([1, 5, 8, 2]));

// Find the biggest number
//function that takes an array of numbers and return the biggest number
function biggestNum(array) {
    let smallestN;
    for (i = 0; i < array.length; i++) {
      if (smallestN === undefined) {
        smallestN = array[i]
      }
      else if (smallestN < array[i]){
          smallestN = array[i]
      }
    }
    return smallestN;
  }
  console.log(biggestNum([1, 5, 8, 3]));
