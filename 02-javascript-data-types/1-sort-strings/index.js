/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const newArr = [...arr];
  let sortDir = null;

  switch (param) {
  case 'asc':
    sortDir = 1;
    break;
  case 'desc':
    sortDir = -1;
    break;
  }

  newArr.sort((a, b) => sortDir * a.localeCompare(b, ['ru', 'en'],{
    caseFirst: 'upper'
  }));

  return newArr;
}
