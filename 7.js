// minimum sum of four digit numbers after spliting digits

function sum(number) {
  let num = number.toString().split("").sort();
  let sum = Number(num[0] + num[3]) + Number(num[1] + num[2]);
  return sum;
}

// console.log(sum(1597));

function sum1(nums) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < nums.length; i++) {
    sum1 += nums[i];
  }
  let arr = nums.join("").split("").map(Number);
  for (let i = 0; i < arr.length; i++) {
    sum2 += arr[i];
  }
  return sum1 - sum2;
}

console.log(sum1([1,2,3,4]));
