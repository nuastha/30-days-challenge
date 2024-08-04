// Certainly! In JavaScript, a **callback function** is a function that is **passed as an argument to another function** and is executed after a specific operation has completed. Let's break it down:

// 1. **Definition:**
//    - A callback function is provided to another function (the **higher-order function**).
//    - The higher-order function will **invoke** the callback function when a certain condition or task is fulfilled.

// 2. **Asynchronous Operations:**
//    - Callbacks are commonly used for handling **asynchronous operations**.
//    - For example, when making an API request, you can pass a callback function to be executed once the data is received.

// 3. **Example:**
//    ```javascript
function fetchData(url, callback) {
    // Simulate fetching data from the server
    setTimeout(() => {
        const data = { name: 'John', age: 30 };
        callback(data); // Invoke the callback with the fetched data
    }, 1000);

    // Simulate an error
    setTimeout(() => {
        const error = new Error('Failed to fetch data');
        callback(error); // Invoke the callback with the error
    }, 2000);
}

function displayData(user) {
    console.log(`User: ${user.name}, Age: ${user.age}`);
}

let urls = 'https://api.example.com/user'

// Usage
fetchData(urls, displayData);
//    ```

// 4. **Common Use Cases:**
//    - Event handling (e.g., button clicks, timers)
//    - Asynchronous tasks (e.g., fetching data, reading files)
//    - Promises and `async/await` also use callbacks under the hood.

// Remember that callbacks allow you to write code that continues executing while waiting for specific events or tasks to complete. They're essential for managing asynchronous behavior in JavaScript! 🚀 ¹²³⁴⁵

// Source: Conversation with Copilot, 8/3/2024
// (1) JavaScript Callbacks - W3Schools. https://www.w3schools.com/js/js_callback.asp.
// (2) Understanding Callback Functions in JavaScript | Bits and Pieces - Medium. https://blog.bitsrc.io/understanding-callback-functions-in-javascript-a-comprehensive-guide-30a61cdcc3d6.
// (3) What are Callbacks in JavaScript? — SitePoint. https://www.sitepoint.com/callbacks-javascript/.
// (4) A Guide to Callback Functions in JavaScript | Built In. https://builtin.com/software-engineering-perspectives/callback-function.
// (5) What is a Callback Function in JavaScript? - freeCodeCamp.org. https://www.freecodecamp.org/news/what-is-a-callback-function-in-javascript/.


// callback function 


function man(good, game) {
    good = [1, 2, 3, 4, 5];
    const result = game(good); // Call game with good as an argument and store the result
    console.log(result); // Log the result
}

function game(data) {
    let like = data.map((date) => {
        let most = date * date;
        return most; // Return the result of the calculation
    });
    return like; // Return the like array
}

man(undefined, game); // Pass game as an argument to man


// callback function again 

function shoutOut(greeting = 'hello', otherFunction) {
    // console.log(greeting + ' world!');

    console.log(typeof greeting);
    console.log(typeof otherFunction);

    // otherFunction(greeting);
}

function otherFunction(gg) {
    console.log(gg);
}

shoutOut('love', otherFunction);


// shoutOut(undefined, otherFunction); // This will throw an error because otherFunction is not a function


// callback practise 

function one(two, three) {
    two = {
        id: 1,
        weight: 100,
        height: 200
    }
    const result = three(two);
    console.log(result);
}
function three(passed) {
    const { id, weight, height } = passed
    console.log(id, weight, height);
    return { id, weight, height };
}

one(undefined, three);

// callback creation

function mobile(love, once) {
    love = new Date().getMinutes()
    console.log(love)
    once(love*100)
}

function once(p) {
    setTimeout(() => {
        console.log('god love you')
    }, p)
}

mobile(undefined, once)
