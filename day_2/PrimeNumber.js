function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function showPrimeNumber(n) {
  let primes = '';

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes += i + ' ';
    }
  }

  return(primes);
}

console.log(showPrimeNumber(100));