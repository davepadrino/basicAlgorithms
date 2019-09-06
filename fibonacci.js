const applyFibonacci = initialValues =>
  initialValues.push(
    initialValues
      .slice(initialValues.length - 2)
      .reduce((total, el) => total + el)
  );

const fibonacci = quotaToTest => {
  const initialValues = [1, 2];
  let newArray = [];

  while (newArray.length < quotaToTest) {
    console.log("shittt", newArray, newArray.length);
    newArray = applyFibonacci(initialValues);
    console.log("shittt 2", newArray, newArray.length);
  }

  return newArray;
};

console.log(fibonacci(10));
