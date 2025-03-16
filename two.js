//write a function that returns the sum of two numbers

function sum(param1,param2){
  return param1+ param2
}

console.log('sum',sum(1,4));


// write a function that returns the sum of all numbers regardless of # of params

function sum1(...params){
    let total = 0;
    params.forEach(element => {
       total +=element 
    });
    return total;
}

console.log('sum2',sum1(1,2,3,4));
