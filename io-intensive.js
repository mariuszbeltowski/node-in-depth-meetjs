const { readFile } = require("fs");
const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Go forward ", () => {
  const start = Date.now();

  function getFile(filename) {
    readFile(filename, (error, key) => {
      console.log(`${filename}:`, Date.now() - start, "ms");
    });
  }

  getFile("./random.txt");
  // getFile("./random1.txt");
  // getFile("./random2.txt");
  // getFile("./random3.txt");
  // getFile("./random4.txt");
  // getFile("./random5.txt");
  // getFile("./random6.txt");
  // getFile("./random7.txt");
  // getFile("./random8.txt");
  // getFile("./random9.txt");
});
