function compareObjects(obj1, obj2) {
  // Get the keys for both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // If the number of keys is different, the objects are not equivalent
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Iterate over the keys of the first object
  for (let key of keys1) {
    // If the key is not in the second object or the values are different, the objects are not equivalent
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  // If we get here, all the keys and values are the same
  return true;
}

// Example usage:
const obj1 = { name: "Alice"};
const obj2 = { name: "Alice" };
const obj3 = { name: "Bob"};

console.log(compareObjects(obj1, obj2)); // Output: true
console.log(compareObjects(obj1, obj3)); // Output: false