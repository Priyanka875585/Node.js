Question 3: Simulate fetching data from three different APIs. Write a function fetchAPIs() that
returns a Promise using Promise.all. Each API simulation should resolve with a different message
("API 1 data", "API 2 data", "API 3 data") after 1 second. Log all the resolved results together.

function fetchAPI1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("API 1 data");
    }, 1000);
  });
}


function fetchAPI2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("API 2 data");
    }, 1000);
  });
}


function fetchAPI3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("API 3 data");
    }, 1000);
  });
}


function fetchAPIs() {
  Promise.all([fetchAPI1(), fetchAPI2(), fetchAPI3()])
    .then((results) => {
      console.log("All API data fetched:");
      console.log(results); // Logs: ["API 1 data", "API 2 data", "API 3 data"]
    })
    .catch((error) => {
      console.error("Error fetching APIs:", error);
    });
}


fetchAPIs();
