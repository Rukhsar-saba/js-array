function each(elements, cb) {
  // Do NOT use forEach to complete this function.
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each
  for (let index = 0; index <= cb; index++) {
    console.log(elements[index]);
  }
}
each([1, 2, 3, 4, 5, 5], 6);
