function lengthOfLastWord(s) {
  let a = s.trim().split(" ");
  let b = a.pop();
  return b.length;
}

console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 5

function noOne(digits) {
  let a = digits.join("");
  let b = Number(a) + 1;
  let c = b.toString().split("");

  return c;
}

// Output: ['1', '2', '3', '4', '5']

function onePlus(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
}

console.log(onePlus([9, 9, 9, 9]));
