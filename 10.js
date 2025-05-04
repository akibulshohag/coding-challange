//build array from permutation

function permutation(array){
   let result = [];
   for(let i = 0; i < array.length; i++){
      result[i] = array[array[i]];
   }
   return result
}


console.log(permutation([0, 2, 1, 5, 3, 4]));
