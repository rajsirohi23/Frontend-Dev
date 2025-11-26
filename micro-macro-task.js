console.log("Start");

setTimeout(() => {
    console.log("time out");
}, 0);

Promise.resolve().then(() => {
    console.log("promise resolved");
});

console.log("End");
