const isMultiple = (number, divisor) => number % divisor === 0;

const chooseNumberGivenEvenBoolean = isEven => (isEven ? 2 : 1);

const smallestMultipleInRange = (maxRangeNumber, isEven) => {
  let index = chooseNumberGivenEvenBoolean(isEven);
  let j = 1;
  while (index !== maxRangeNumber) {
    if (isMultiple(j, index)) {
      index = index + chooseNumberGivenEvenBoolean(isEven);
    } else {
      j++;
      index = chooseNumberGivenEvenBoolean(isEven);
    }
  }
  console.log("index", index);
  console.log("j", j);
};

smallestMultipleInRange(10, false);
