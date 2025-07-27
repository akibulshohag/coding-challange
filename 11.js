//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.


const twoSum = (nums, target)=> {
    let map= [];
    for(let i = 0; i< nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                map.push(i,j);
                return map;
            }
        }
    }
};

//  console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

 function twoSum2(nums,target){
    let map = new Map();
    for(let i =0; i< nums.length; i++){
        let diff = target - nums[i]
        if(map.has(diff)){
            return [map.get(diff),i]
        }
        map.set(nums[i],i)
    }    
    return [];
 }

 console.log(twoSum2([2, 7, 11, 15], 18)); // [0, 1]
 