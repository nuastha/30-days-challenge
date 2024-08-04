// ====================== promise ===================

// promise working principal 
// 1. new Promise() - promise object
// 2. resolve() - resolve the promise
// 3. reject() - reject the promise 
// 4. then() - handle the resolve value
// 5. catch() - handle the reject value
// 6. finally() - execute the code regardless of the promise state
// 7. promise chaining - chaining multiple promises together
// 8. promise.all() - handle multiple promises together
// 9. promise.race() - handle multiple promises together at the same time
// 10. promise.allSettled() - handle multiple promises together and wait for all of them to resolve or reject at the same time
// 11. promise.any() - handle multiple promises together and return the first one that resolves


// promise creation with out holding into variable

new Promise(function (resolve, reject) {
    let value = true
    if (!value) {
        resolve("1 + 1")
    }
    else {
        reject("1 + 2")
    }
}).catch((data) => {
    console.log("done", data)
})


// promise creation with holding into variable

let promise = new Promise(function (resolve, reject) {
    let value = true
    if (value) {
        resolve("1 + 1")
    }
    else {
        reject("1 + 2")
    }
})

promise.then((data) => {
    console.log("done", data)
})


// promise chaining 

// You start with an initial promise.
// You attach .then() handlers to that promise.
// Each .then() handler returns a new promise, which allows you to chain them together.
// The result of one .then() becomes the input for the next one.
// For example:


new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
})
    .then(function (result) {
        console.log(result); // Shows 1
        return result * 2;
    })
    .then(function (result) {
        console.log(result); // Shows 2
        return result * 2;
    })
    .then(function (result) {
        console.log(result); // Shows 4
    });


// Certainly! **`Promise.all()`** is a powerful method in JavaScript for handling multiple promises concurrently. Let me break it down for you:

// 1. **Aggregating Promises:**
// - `Promise.all()` accepts an iterable (usually an array) of promises.
// - It returns a new promise that resolves to an array of results from the input promises.
// - The order of results in the output array corresponds to the order of the input promises.

// 2. **Success Case:**
// - If all input promises resolve successfully, the returned promise resolves with an array of their results.
// - For example:
//   ```javascript
const promises = [fetchData1(), fetchData2(), fetchData3()];
Promise.all(promises)
    .then(results => {
        console.log(results); // [result1, result2, result3]
    })
    .catch(error => {
        console.error(error);
    });
const result1 = await Promise.all(promises);
console.log(results); // [result1, result2, result3]
//   ```

// 3. **Failure Case:**
// - If any of the input promises reject (i.e., an error occurs), the entire `Promise.all()` operation is rejected.
// - This means that if even one promise fails, the whole batch fails.
// - To handle individual failures, consider using `.catch()` on each promise before passing them to `Promise.all()`.

// 4. **Example with Error Handling:**
// - Suppose you want to fetch data from multiple APIs and handle errors gracefully:
//   ```javascript
const apiCalls = [fetchData1(), fetchData2(), fetchData3()];
const safeApiCalls = apiCalls.map(promise => promise.catch(err => err));
const results = await Promise.all(safeApiCalls);
console.log(results); // [result1, result2, Error('Failed to fetch data')]
//   ```

// Remember that `Promise.all()` is a powerful tool, but be mindful of error handling to avoid unexpected behavior. Feel free to ask if you'd like more examples or further clarification! 🚀 ¹²³⁴⁵

// Source: Conversation with Copilot, 8/3/2024
// (1) How do I await multiple promises in-parallel without 'fail-fast .... https://stackoverflow.com/questions/41292316/how-do-i-await-multiple-promises-in-parallel-without-fail-fast-behavior.
// (2) Aggregate Multiple API Requests with Promise.all() - Hackmamba. https://hackmamba.io/blog/2020/12/aggregate-multiple-api-requests-with-promise-all/.
// (3) JavaScript Promise.all (): Aggregate Results from Multiple Promises. https://www.javascripttutorial.net/javascript-promise-all/.
// (4) JavaScript Promises: Promise.all and Promise.allSettled. https://dev.to/ashishxcode/javascript-promises-understanding-the-differences-between-promiseall-and-promiseallsettled-bc8.
// (5) Awaiting Multiple Promises with Promise.all - Aleksandr Hovhannisyan. https://www.aleksandrhovhannisyan.com/blog/javascript-promise-all/.
// (6) genius.com. https://genius.com/michael-brook-darwin-theme-lyrics.

const match = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let obj = {
            name: "michael brook",
            age: 30
        }
        resolve(obj)
    }, 3000);
})

match.then((passedDate) => {
    let { name, age } = passedDate
    console.log(name, age)
})

setTimeout(() => {
    console.log('love', 'most')
}, 1000, ['love', 'most'])

setInterval((makes, love) => {
    let [live, making] = makes
    console.log(live, making, love)
}, 1000, ['most', 'handsome'], ['a', 'b', 1, 4, 6].map((d) => { return d + d }));

// what is map of array

// it's iteration method of array on javascript 
// it returns a new array with the results of applying the provided function on every element in this array
// it's a higher order function
// it's give new array with whatever we do on inside the function.
// it's a function that returns a function 


//create a promise that is going tell me time of right now.

const meow = new Promise((resolve, reject) => {
    setInterval(() => {
        const date = new Date()
        console.log(date.getSeconds())
        resolve(date)
    }, 1000)
})
meow.then((data) => {
    console.log('meow', data.getSeconds())
}).then((data) => {
    console.log('meow', data.getSeconds())
})




// promise create and chaining 

const word = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let character = 'love'
        character = (character.split(''))
        resolve(character)
    }, 5000)
})
word.then((data) => {
    data = data.reverse().join('')
    console.log(data)
    return data
}).then((me) => {
    me = me.split('').reverse().join('')
    console.log(me)
    return me
}).finally(() => {
    console.log('done')
    setTimeout((last) => {
        console.log('done', last)
    }, 2000)
})

// promise chaining is a way to handle asynchronous code in a more readable way.

// life is more beautiful

console.log(word.catch((e) => { console.log(e.target) }))

// catch is used to handle errors in promises. it is used to handle the error that is thrown

const lLove = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let love = 'love'
        resolve(love)
    }, 3000)
})

lLove.then((e) => {
    console.log(e)
})


// promise create at first 

const we = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let love = 'love'
        resolve(love)
    }, 1000)
})
we.then((pass)=>{
    console.log(`i ${pass} you`)
})

