export default (number: number | string, stringLength: number): string => {
  if (stringLength < number.toString().length) {
    throw new Error('stringLength < number.length');
  }

  const zeroLength = stringLength - number.toString().length;
  const filledArray = new Array(zeroLength).fill(0);
  filledArray.push(number);
  return filledArray.join('');
};
