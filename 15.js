//remove duplicates from an array
function removeDuplicates(nums) {
  if (nums.length === 0) return [];
  let array = [];
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      array.push(nums[k]);
      k++;
    }
  }
  return array;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: [1, 2]



function removeElements(nums,val){
  let k = 0;
  let array = [];
  for( let i =0;i<nums.length;i++){
    if(nums[i] !== val){
      nums[k] = nums[i];
      array.push(nums[k]);
      k++;
    }
  }
  return array;
}

console.log(removeElements([3,2,2,3],3));

