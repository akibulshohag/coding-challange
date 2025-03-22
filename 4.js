//give a sequence of integer to an array, determine whether it is possible to obtain a strctly increasing sequence by removing not more than one element from the array

function sequence(inputArray) {
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] < inputArray[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(sequence([1, 2, 3]));
