let fetchData = new Promise((resolve, reject) => {
    let dataAvailable = Math.random() 

    setTimeout(() => {
        if (dataAvailable) {
            resolve("Data fetched successfully!");
        } else {
            reject("Failed to fetch data.");
        }
    }, 1500);
});

fetchData
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Fetch attempt completed."))