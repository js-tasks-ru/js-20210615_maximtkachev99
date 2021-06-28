/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  const arr = string.split('');
  const newArr = [];

  let char = arr[0];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== char) {
      char = arr[i];
      count = 0;
    }

    if (count === size) {
      continue;
    }

    newArr.push(arr[i]);
    count++;
  }

  return newArr.join('');
}
