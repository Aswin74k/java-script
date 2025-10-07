const prompt = require('prompt-sync')();

let myPromise = new Promise((resolve, reject) => {
    let userInput = prompt("Type 'yes' for success, 'no' for failure:");

    setTimeout(() => {
        if (userInput.toLowerCase() === "yes") {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected!");
        }
    }, 2000);
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Promise execution finished"));
    