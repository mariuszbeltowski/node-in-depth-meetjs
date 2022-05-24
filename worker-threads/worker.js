const { parentPort } = require("worker_threads");

parentPort.on("message", (data) => {
  console.log("Received message with index", data.index);

  const result = longIteration();

  parentPort.postMessage({
    index: data.index,
    result,
  });
});

function longIteration() {
  for (let i = 0; i < 6000000000; ++i) {}
}
