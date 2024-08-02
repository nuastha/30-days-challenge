// =============== promise and async/await =======================

// task 1: create a promise that resolves with message after 3 seconds timeout and log the result to the console.

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("message")
    }, 3000)
})

promise.then((data) => {
    console.log(data)
})

// task 2: create a promise that reject with error message after 3 seconds timeout and log the result to the console.

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("error")
    }, 3000)
})

promise1.then((data) => {
    console.log(data)
})
    .catch((err) => {
        console.log(err)
    })


// ==================== chaining promise ==================================

// task 3: create a sequence of promise that simulate fetching data from a server. chain the promises to log message in specific order to the console.

function fetchData(message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, 1000);
    });
}

fetchData('Fetching data 1')
    .then(() => fetchData('Fetching data 2'))
    .then(() => fetchData('Fetching data 3'))
    .then(() => fetchData('Fetching data 4'));

// =============== async/await =======================

// task 4: create an async function that simulate fetching data from a server. chain the promises to log message in specific order to the console.

// Simulated data fetching function
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);
    });
}

// Async function to chain promises and log messages in specific order
async function fetchAndLogData() {
    try {
        console.log("Step 1: Start fetching data");
        const data = await fetchData();
        console.log("Step 2:", data);
        console.log("Step 3: Data processed successfully");
        console.log("Step 4: Finish processing data");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// Call the async function to fetch and log data
fetchAndLogData();

// task 5: write a async function that waits for promise to resolve then logs the resolved value.

async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);
    });
}

async function fetchAndLogData() {
    try {
        console.log("Step 1: Start fetching data");
        const data = await fetchData();
        console.log("Step 2:", data);
        console.log("Step 3: Data processed successfully");
        console.log("Step 4: Finish processing data");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

fetchAndLogData();


// task 6: write a async function that waits for promise to reject using try catch then logs the rejected value.

// Function that returns a promise that rejects after a timeout
function rejectAfterTimeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Promise rejected after timeout");
        }, 2000);
    });
}

// Async function that waits for the promise to reject and logs the rejected value
const waitAndLogRejectedValue = async (promise) => {
  try {
    const value = await promise;
    console.log('Promise resolved:', value);
  } catch (error) {
    console.log('Promise rejected:', error);
  }
};

// Example usage
const rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise rejected with an error');
  }, 2000);
});

waitAndLogRejectedValue(rejectedPromise);

// ======================= fetching data from an api =========================

// task 7:use fetch api to get data from an public api and log the response to the console using promise.

fetch('https://jsonplaceholder.typicode.com/todos/1')

    .then(response => response.json())
    //  
    .then(json => console.log(json))
    .catch(error => console.log(error))


// task 8:use fetch api to get data from an public api and log the response to the console using async/await.

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchData();

// ======================= concurrent promise =========================

// task 9: use promise.all to wait for multiple promise to resolve then log all their response to the console.

const promi1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise 1 resolved'));
const promi2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Promise 2 resolved'));
const promi3 = new Promise((resolve) => setTimeout(resolve, 1500, 'Promise 3 resolved'));

Promise.all([promi1, promi2, promi3])
  .then((values) => {
    values.forEach((value, index) => {
      console.log(`Promise ${index + 1}: ${value}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });


// task 10: use promise.race to log the value of first that resolves among multiple promise.

const promise5 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise 1 resolved'));
const promise6 = new Promise((resolve) => setTimeout(resolve, 2000, 'Promise 2 resolved'));
const promise7 = new Promise((resolve) => setTimeout(resolve, 500, 'Promise 3 resolved'));

Promise.race([promise5, promise6, promise7])
    .then((value) => {
        console.log(`The first promise that resolved is: ${value}`);
    })
    .catch((error) => {
        console.error(error);
    });