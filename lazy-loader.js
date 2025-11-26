function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.8 ? resolve("profile loaded") : reject("profile Fail");
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.8 ? resolve("Posts Loaded") : reject("Posts Failed");
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.8 ? resolve("Messages Loaded") : reject("Messages Failed");
        }, 1000);
    });
}

let startTime = Date.now();

Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
    .then(result => {
        result.forEach((item, index) => {
            let section = ["Profile", "Posts", "Messages"][index];
            if (item.status === "filled") {
                console.log(section + ": " + item.value);
            } else {
                console.log(section + ": " + item.reason);
            }
        });

        let endTime = Date.now();
        console.log("total time:", (endTime - startTime) + "ms");
    });
