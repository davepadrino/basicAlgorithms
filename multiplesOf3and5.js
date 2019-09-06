const multiplesOf3And5 = quotaToTest =>
  [...Array(quotaToTest).keys()]
    .slice(1)
    .filter(i => i % 5 === 0 || i % 3 === 0)
    .reduce((el, num) => el + num);

console.log(multiplesOf3And5(1000));
