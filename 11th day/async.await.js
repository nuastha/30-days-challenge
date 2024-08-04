// Certainly! Let's dive into **async/await** in JavaScript:

// 1. **Definition:**
//    - **Async/await** is a more comfortable way to work with promises.
//    - The `async` keyword is used before a function declaration to indicate that the function always returns a promise.
//    - The `await` keyword can only be used inside an `async` function.
//    - It makes JavaScript wait until a promise settles and returns its result.

// 2. **Example:**
//    ```javascript
async function fetchData() {
    let promise = new Promise((resolve) => {
        setTimeout(() => resolve("done!"), 1000);
    });

    let result = await promise;
    console.log(result); // "done!"
}

fetchData();
//    ```

//    In this example:
//    - The function `fetchData` returns a promise (because it's marked as `async`).
//    - The `await` keyword pauses execution until the promise resolves.
//    - The code shows "done!" after waiting for 1 second.

// 3. **Real-World Usage:**
//    - You can use `async/await` to handle asynchronous operations more elegantly.
//    - For instance, fetching data from APIs, reading files, or making database queries.

// Remember, `await` suspends function execution until the promise settles, making your code cleaner and easier to read! 🚀 ¹²³⁴⁵

// Source: Conversation with Copilot, 8/3/2024
// (1) Async/await - The Modern JavaScript Tutorial. https://javascript.info/async-await.
// (2) JavaScript Async / Await: Asynchronous JavaScript - JavaScript Tutorial. https://www.javascripttutorial.net/javascript-async-await/.
// (3) Async Await in Node.js - GeeksforGeeks. https://www.geeksforgeeks.org/async-await-in-node-js/.
// (4) undefined. https://api.github.com/users/.

async function name() {
    let promise = new Promise((resolve) => {
        setTimeout(() => resolve("done!"), 1000);
    });
    const data = await promise;
    displayData(data);
}

function displayData(data) {
    console.log(data);
}

name()

async function match() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let number = Math.floor(Math.random() * 10 + 1)
            resolve(number)
        }, 5000)
    })

    const data = await promise;
    display(data)
}

function display(data) {
    if (data > 5) {
        console.log("you won")
        console.log(data)
    }
    else {
        console.log("you lost")
        console.log(data)
    }
}

match()