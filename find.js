function find(elements, cb) {
  // Do NOT use .includes, to complete this function.
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i]);
  }
}
function callBack(element) {
  if (element < 5) {
    console.log(element);
  }
}
find([1, 2, 3, 4, 5, 5], callBack);
