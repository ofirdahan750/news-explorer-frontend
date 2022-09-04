export function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}
export function checkStringLength(str) {
  return str.split(" ").join("").length;
}
