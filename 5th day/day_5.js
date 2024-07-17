//=================== day 5: functions =====================================

// ================== function declaration ======================================

// task 1: write a function to check if a number even or odd and log the result to the console.

function isEven(num) {
    if (num % 2 == 0) {
        console.log("even")
    }
    else {
        console.log("odd")
    }
}
// task 2: write a function to calculate the square of a number and return result to the console.

function square(num) {
    let result = num ** 2
    return result
}

console.log(square(3))

// ================== function expression ======================================

// task 3: write a function expression to find the maximum of two number and log the result to the console.

let maximum = function (num, num1) {
    if (num > num1) {
        console.log(`${num} is bigger`)
    }
    else {
        console.log(`${num1} is bigger`)
    }
}

maximum(5, 3)

// task 4: write a function expression to concatenate two string and return result to the console.

let concatenate = function (first, second) {
    let result = `${first + second}`

    return result
}

console.log(concatenate('man', 'hood'))

// ================== arrow function  ======================================

// task 5: write an arrow function to calculate the sum of two numbers and return result the console.

let sum = (num, num1) => num + num1

console.log(sum(5, 3))

// task 6: write an arrow function to check if a string contains a specific character and return boolean value the console.

let contains = (str, char) => str.includes(char)

console.log(contains('hello', 'l'))

// ================== function parameter and default value ======================================

// task 7: write a function that take two parameters and return their product and log the result to the console.

function twoProduct(firstNum, secondNum) {
    let result = firstNum * secondNum
    return result
}

console.log(twoProduct(5, 3))

// task 8: write a function that a person's name and age and log the result to the console.

function person(name, age = 30) {
    let result = `my name is ${name} and my age is ${age}`
    return result
}

console.log(person('john'))

// ================== higher-order function  ======================================

// task 9: write a higher-order function that takes a function and a number, and calls the function that many times.

function repeat(func, num) {
    for (let i = 0; i < num; i++) {
        func()
    }
}

repeat(function func() { console.log('hello') }, 3)

// task 10: write a higher-order function that takes two function and a value, applies the first function to the value, and then applies second function to result.

function apply(func1, func2, value) {
    let result = func1(value)
    return func2(result)
}

console.log(apply(Math.abs, Math.sqrt, -9))

// task 11: write a higher-order function that takes a function and a value, and calls the function that many times.

function repeat(func, num) {
    for (let i = 0; i < num; i++) {
        func()
    }
}

repeat(function func() { console.log('hello') }, 3)
