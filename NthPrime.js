const isPrime = num => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

const NthPrime = nth => {
  let index = 2;
  let auxiliarToCompare = 0;
  while (auxiliarToCompare < nth) {
    if (isPrime(index)) {
      auxiliarToCompare++;
    }
    index++;
  }
  console.log(index - 1);
};

NthPrime(10001);
