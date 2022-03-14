function filter(elements, cb) {
  // Do NOT use .filter, to complete this function.
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  let result = [];

  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      result.push(elements[i]);
    }
  }
  console.log(result);
}
filter([1, 2, 3, 4, 5, 5], (item) => item < 5);
