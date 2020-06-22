const getNumbers = (value) => {
  const number = value / 100;

  const numberString = number.toString().replace(/,/g, '.');

  if (numberString.length < 4) {
    return parseFloat(numberString).toFixed(2);
  }
  return parseFloat(numberString).toFixed(2);
};

export default getNumbers;
