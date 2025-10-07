function fetchData(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 1000);
  });
}

async function getData() {
  try {
    const result = await fetchData(true); 
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Operation complete.");
  }
}

getData();