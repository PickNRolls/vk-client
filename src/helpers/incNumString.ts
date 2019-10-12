import toFixedNumString from "./toFixedNumString";

export default (numString: string): string => {
  const number = Number(numString) + 1;
  return toFixedNumString(number, numString.length);
};
