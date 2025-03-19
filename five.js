//sum all the prime numbers up to and including the provided number
function primesum(num) {
  let primeTotal = 0;
  for (let i = 2; i < num; i++) {
    for (let j = 2; j < num; j++) {
      if (i === j) {
        primeTotal += i;
      }
      if (i % j == 0) {
        break;
      }
    }
  }
  return primeTotal;
}

console.log(primesum(5));

function primesum2(num) {
  const primes = [];
  for (let i = 2; i < num; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  const primeTotal = primes.reduce((sum, current) => sum + current, 0);

  return primeTotal;
}

// Test the function
console.log(primesum2(10));
