Question 1: Write a function fetchData() that returns a Promise. The promise should resolve with the message "Data fetched successfully!" after 2 seconds.
  Create another function displayData() that calls fetchData() and logs the resolved value to the console.

  
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000); // 2 seconds delay
  });
}


function displayData() {
  fetchData()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
