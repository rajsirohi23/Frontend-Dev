function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.85 ? resolve("Server A done") : reject("A crashed");
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.85 ? resolve("Server B done") : reject("B crashed");
        }, 3000);
    });
}

Promise.all([serverA(), serverB()])
    .then(() => console.log("Deployment completed for all servers"))
    .catch(err => console.log("Error", err));

Promise.race([serverA(), serverB()])
    .then(fast => console.log("Fastest response", fast))
    .catch(err => console.log("Error", err));
