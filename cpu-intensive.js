const { pbkdf2 } = require("crypto");

const start = Date.now();

function generateKey() {
  // Password-Based Key Derivation Function 2
  pbkdf2("a", "b", 100000, 512, "sha512", (error, key) => {
    console.log("Key created after:", Date.now() - start, "ms");
  });
}

generateKey();
// generateKey();
// generateKey();
// generateKey();
// generateKey();
