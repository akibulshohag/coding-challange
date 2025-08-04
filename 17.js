function searchInsert(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
    if(nums[i] > target){
      return i;
    }
  }
  return nums.length;
}

console.log(searchInsert([1, 3, 5, 6], 2));


function searchInsert1(nums, target) {
    return nums.findIndex(num => num >= target);
  }

  console.log(searchInsert1([1,3,5,6],10));

