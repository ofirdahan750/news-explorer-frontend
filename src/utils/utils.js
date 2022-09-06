export function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}
export function checkStringLength(str) {
  return str.split(" ").join("").length;
}
export function countAndSortArrByKey({arr, key}) {
  const keyCount = {};
  arr.forEach((obj) => {
    if (keyCount[obj[key]]) {
      keyCount[obj[key]] += 1;
    } else {
      keyCount[obj[key]] = 1;
    }
  });
  const sortable = Object.fromEntries(
    Object.entries(keyCount).sort(([, a], [, b]) => b - a)
  );
  return sortable;
}
