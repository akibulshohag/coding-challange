//give a rectangular matrizx of characters, add a border of asteriskds(*) to it
function addBorder(pictures) {
  let wall = "*".repeat(pictures[0].length + 2);
  pictures.unshift(wall);
  pictures.push(wall);

  for (i = 1; i < pictures.length - 1; i++) {
    pictures[i] = "*".concat(pictures[i], "*");
  }
  return pictures;
}

console.log("......pictures", addBorder(["abcf", "defg", "bn"]));

function addNumber(params) {
  let result = [];
  for (i = 0; i < params.length; i++) {
    result.push(params[i]);
    result.push("1");
  }
  return result;
}

console.log(addNumber(["a", "b", "c", "d"]));
