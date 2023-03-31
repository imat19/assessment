function myFunction() {
  // Code to be timed goes here
  for (let i = 0; i < 1000000; i++) {
    Math.random();
  }
}

console.time("Executed");
myFunction();
console.timeEnd("Executed");
