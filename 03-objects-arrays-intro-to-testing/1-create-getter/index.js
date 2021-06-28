/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const pathArr = path.split('.');
  let index = 0;

  const getter = function (obj) {
    if (index === pathArr.length - 1 || obj[pathArr[index]] === undefined) {
      return obj[pathArr[index]];
    } else {
      index++;
      return getter(obj[pathArr[index - 1]]);
    }
  };

  return getter;
}
