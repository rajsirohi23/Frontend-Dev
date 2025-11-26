function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let fail = Math.random() < 0.2;
            if (fail) reject("Could not fetch bugs");
            else resolve(["UI glitch", "API timeout", "Login failure"]);
        }, 1000);
    });
}

getBugs()
    .then(list => console.table(list))
    .catch(err => console.log("Error:", err));
