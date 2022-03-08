function flatten(elements) {
  // Flattens a nested array (the nesting can be to any depth).
  // Hint: You can solve this using recursion.
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let newArray = elements.flat(Infinity);
  console.log(newArray);
}

flatten([1, [2], [[3]], [[[4]]]]);
