const sumOfSquares = maxNumber =>
  [...Array(maxNumber)]
    .map((i, x) => Math.pow(x + 1, 2))
    .reduce((x, y) => x + y);

const squareOfSum = maxNumber =>
  Math.pow(
    [...Array(maxNumber)].map((i, x) => x + 1).reduce((x, y) => x + y),
    2
  );

const sumSquareDifference = maxNumber =>
  squareOfSum(maxNumber) - sumOfSquares(maxNumber);

console.log("sumSquareDifference", sumSquareDifference(100));
