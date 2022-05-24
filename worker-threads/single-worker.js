const { Worker } = require("worker_threads");

const worker = new Worker("./worker.js");

//Listen for a message from worker
worker.on("message", (res) => {
  console.log(`Finished job for index ${res.index}`);
});

worker.on("error", (error) => {
  console.log(error);
});

worker.postMessage({ index: 0, date: new Date() });

setInterval(() => console.log("Tick", new Date()), 1000);
