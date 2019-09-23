const isPalindrome = number => {
  const arrayOfDigits = number
    .toString()
    .split("")
    .reverse()
    .join("");
  if (arrayOfDigits.length > 2 && number.toString() === arrayOfDigits) {
    return true;
  }
  return false;
};

const latgestPalindromeProduct = () => {
  let multiplicand = (multiplicator = 999);

  for (let j = multiplicand; j > 0; j--) {
    for (let i = multiplicator; i > 0; i--) {
      if (isPalindrome(i * j)) {
        console.log(`${i}*${j}`, i * j);
        return i * j;
      }
    }
  }
};

latgestPalindromeProduct();
