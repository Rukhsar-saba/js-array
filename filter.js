function filter(elements, cb) {
  // Do NOT use .filter, to complete this function.
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  let newArray = [];
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] === cb) {
      newArray.push(elements[i]);
    }
  }
  console.log(newArray);
}
filter([1, 2, 3, 4, 5, 5], 5);
