function map(elements, cb) {
  // Do NOT use .map, to complete this function.
  // How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  let result = [];
  for (index = 0; index < elements.length; index++) {
    let newValue = cb(elements[index]);
    result.push(newValue);
  }
  console.log(result);
}
function callBack(elm) {
  return (elm = elm * 5);
}
map([1, 2, 3, 4, 5, 5], callBack);
