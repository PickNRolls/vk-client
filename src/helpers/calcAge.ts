export default (birthday: any): number => {
  var diffMs = Date.now() - birthday.toMillis();
  var ageDate = new Date(diffMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
