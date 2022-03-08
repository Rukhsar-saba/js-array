let addNum = 0;
function reduce(elements, cb, startingValue) {
  // Do NOT use .reduce to complete this function.
  // How reduce works: A reduce function combines all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
  for (let index = startingValue; index < cb - 1; index++) {
    addNum = addNum + elements[index];
  }
  console.log(addNum);
}
reduce([2, 3, 4, 5, 5], 6, 0);
