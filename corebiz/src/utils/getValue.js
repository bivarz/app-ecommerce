import getNumbers from './getNumbers';

function getValue(product) {
  return product.installments.map((vl) => getNumbers(vl.value) * 100);
}

export default getValue;
