// reactangle pattern

function rectanglarPatter(row, col) {
  let star = "";
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      star += "*";
    }
    star += "\n";
  }
  return star;
}

// console.log(rectanglarPatter(5, 4));

// hollow rectangular pattern
function hollowPattern(row, col) {
  let star = "";
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      if (j == 1 || j == col) {
        star += "*";
      } else if (i == 1 || i == row) {
        star += "*";
      } else {
        star += " ";
      } 
    }
    star += "\n";
  }
  return star;
}

// console.log(hollowPattern(5, 4));

//inverted half pyramid

function pyramidPatter(num) {
    let star = "";
    for (let i = num; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        star += "*";
      }
      star += "\n";
    }
    return star;
  }

  console.log(pyramidPatter(5));
  