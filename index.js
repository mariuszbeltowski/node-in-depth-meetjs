console.log("Begin of file");

function longIteration(index) {
  console.log("Start: Long iteration", index);
  for (let i = 0; i < 1000000000; ++i) {}
  console.log("End: Long iteration", index);
}

setTimeout(() => {
  longIteration(0);
});

// setTimeout(() => {
//   console.log("Second timeout");
// });

// new Promise(() => {
//   longIteration(1);
// });

// longIteration(2);

console.log("End of file");
