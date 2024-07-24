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
async function waitForRejection() {
    try {
        await rejectAfterTimeout();
    } catch (error) {
        console.error("Promise rejected:", error);
    }
}

// Call the async function to wait for rejection and log the rejected value
waitForRejection();