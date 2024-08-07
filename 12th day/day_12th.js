// ====================== basic try catch error ====================

// task 1: write a function that intentionally throw an error and use try catch block to handle the error and log an appropriate message to the console.

function name() {
    try {
        throw new Error("coming error")
    } catch (error) {
        console.log(error)
    }
}
name()

// task 2: create a function that divide the numbers throw the error if denominator is zero. use try catch block to handle the error.


function divide(a, b) {
    try {
        let div = a / b
        if (b == 0) {
            throw new Error("denominator is zero")
        }
        else {
            console.log(div)
        }
    } catch (err) {
        console.log(err)
    }
}

divide(10, 0)


// ====================== finally block ====================

// task 3: write a script that includes try catch block and finally block. log message in try catch finally block to observe the execution flow.


function fun() {
    try {
        console.log("try")
        throw new Error("error")
    } catch (error) {
        console.log("catch")
    } finally {
        console.log("finally")
    }
}

fun()


// ====================== custom error objects ====================

// task 4: create a custom error class that extends the built-in error class. throw an instance of this custom error in a function and handle it using try-catch block.


class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}


function fun1() {
    try {
        throw new CustomError("custom error")
    } catch (error) {
        console.log(error)
    }
}

fun1()


// task 5: write a function that validates user input (e.g., check if a string not empty ) and throw a custom error if the validation fails. handle the custom error using try-catch block.

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "NAME";
    }
}

function fun2() {
    try {
        let name = ""
        if (name == "") {
            throw new CustomError("name is empty")
        }
        else {
            console.log(name)
        }
    } catch (error) {
        console.log(error)
    }
}

fun2()

// ================= error handle in promise =====================

// task 6: create a promise that randomly resolves or rejects. .catch() to handle the rejection and log the an appropriate message in the console.

const promise = new Promise((resolve, reject) => {
    let value = Math.random()
    if (value < 0.5) {
        resolve("success")
    }
    else {
        reject("failed")
    }
})

promise.then((data) => console.log(data))
    .catch((data) => console.log(data))


// ================ error handle in async and await =====================

// task 7: create an async function that rejects after 2 seconds and use await to handle the rejection and log the an appropriate message in the console.


async function fun3() {
    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("failed")
            }, 2000)
        })
    } catch (error) {
        console.log(error)
    }
}

fun3()


// ================= graceful error handling fetching ===================

// task 8: use fetch api to get data from an public api and log the response to the console using catch block.


fetch('https://hllo')

    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))


// task 9: use fetch api to get data from an public api using async function and log the response to the console using try catch block.


async function fun4() {
    try {
        const response = await fetch('https://hllo')
        const json = await response.json()
        console.log(json)
    } catch (error) {
        console.log(error)
    }
}

fun4()