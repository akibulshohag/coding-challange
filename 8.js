// check palindrome number

function isPalindrome(x) {
  let result = x.toString().split("").reverse().join("");
  if (Number(result) === x) {
    return true;
  } else {
   return false;
  }
}

console.log(isPalindrome(121));
