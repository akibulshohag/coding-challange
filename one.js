// for inputArray = [1,2,1], elementToReplace = 1 and substractionElem = 3,
// the output should br arrayReplace(inputArray, elementReplace,substractionElem) = [3,2,3]

//first solution
function arrayReplace(inputArray, elementToReplace, substractionElem) {
  inputArray.forEach((element, index) => {
    if (element === elementToReplace) {
      inputArray[index] = substractionElem;
    }
  });
  console.log("inputArray", inputArray);
}

arrayReplace([1, 2, 1], 1, 3);

//2nd solution

function arrayReplace1(inputArray, elementToReplace, substractionElem) {
 return inputArray.map((element) =>
    element === elementToReplace ? substractionElem : element
  );

  
}
console.log('inputArray1', arrayReplace1([1,2,1],1,3));
