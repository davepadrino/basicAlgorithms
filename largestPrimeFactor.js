const isPrime = num => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

const findNextPrimeFactor = num => {
  if (isPrime(num + 1)) {
    return num + 1;
  }
  return findNextPrimeFactor(num + 1);
};

const largestPrimeFactor = (number, arrayOfPrimeFactors = []) => {
  let i = 2;

  if (isPrime(number)) {
    arrayOfPrimeFactors.push(number);
    return arrayOfPrimeFactors;
  } else {
    while (i < number) {
      if (number % i === 0) {
        arrayOfPrimeFactors.push(i);
        return largestPrimeFactor(number / i, arrayOfPrimeFactors);
      } else {
        i = findNextPrimeFactor(i);
      }
    }
  }
  return arrayOfPrimeFactors;
};

const result = largestPrimeFactor(600851475143);
console.log("result", result);
console.log("max is result", Math.max.apply(null, result));
