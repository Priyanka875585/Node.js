Question 2: Create a Promise chain to simulate the following workflow:
● Fetch user data (resolves with "User data fetched" after 1 second).
● Process the user data (resolves with "User data processed" after 1 second).
● Save the processed data (resolves with "User data saved" after 1 second).
Write a function that implements this chain and logs each step’s result to the console.

 
function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data fetched");
    }, 1000); // 1 second delay
  });
}


function processUserData(data) {
  console.log(data); // Log fetched data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data processed");
    }, 1000);
  });
}


function saveUserData(data) {
  console.log(data); // Log processed data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data saved");
    }, 1000);
  });
}


function runWorkflow() {
  fetchUserData()
    .then(processUserData)
    .then(saveUserData)
    .then((finalMessage) => {
      console.log(finalMessage); // Log saved data
    })
    .catch((error) => {
      console.error("Workflow error:", error);
    });
}


runWorkflow();
