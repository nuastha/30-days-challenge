//  ======================= day 8 ES6+ features ============================================

// ======================== template literals ==============================================

// task 1: use a template literal to create a string that includes variable for person's name and age and log the string to the console.

let name = 'john'
let age = 30

console.log(`my name is ${name} and my age is ${age}`)

// task 2: create a multi-line string using template literals and log the results to console.

let name1 = 'john'
let age1 = 30

console.log(`my name is ${name1} and my age is ${age1}`,`new life is going on so let explore the moment of this field make some noise level up and grow for better version this field`)


// ======================== destructuring ==============================================

// task 3: use array destructuring to the extract first and second element from an array of number and log them to the console.

let arr0 = [1, 2, 3, 4, 5]

let [a, b] = arr0

console.log(a, b)

// task 4: use object destructuring to the extract title and author from a book object and log them to the console.

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
}

let {title, author} = book

console.log(title, author)

// ======================== default parameter ==========================================

// task 5: write a function that takes two parameters and return their product with the second parameter having a default value 1. log the result of calling this function with and without the second parameter.

function product(a, b = 1) {
    let result = a * b
    return result
}

console.log(product(5))

console.log(product(5, 10))


// task 6: create a function that takes name and age as parameters and log them to the console. If age is not provided, default value should be 30.
function persons(name, age = 30) {
    let result = `my name is ${name} and my age ${age}`
    return result
}

console.log(persons('john'))

// ======================== spread and rest operators ==================================

// task 7: use the spread operators to create a new array that includes all elements of existing array plus additional and log the new array to the console.

let arr = [1, 2, 3, 4, 5]

let arr1 = [...arr, 6, 7, 8]

console.log(arr1)

// task 8: use the rest operator in a function to accept an arbitrary number of argument sum them and return the result.

function sum(...arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(sum(1, 2, 3, 4, 5))

// ======================== enhanced object literals ===================================

// task 9: use the enhanced object literals to create an object with methods and properties and log the result to the console.

let obj = {
    name: "john",
    age: 30,
    getDetails: function () {
        return `my name is ${this.name} and my age is ${this.age}`
    }
}

console.log(obj.getDetails())
console.log(obj.name)


// ======================== arrow functions ============================================

// task 10: create an arrow function that takes two parameters and returns the sum of the two parameters.

let sum2 = (x, y) => x + y

console.log(sum2(5, 3))

// ======================== for of loop ================================================
// task 11: use the for of loop to iterate over an array and log each element to the console.

let arr2 = [1, 2, 3, 4, 5]
for (let i of arr2) {
    console.log(i)
}

// ======================== for in loop ================================================

// task 12: use the for in loop to iterate over an object and log each property and it's value to the console.

let obj1 = {
    name: "john",
    age: 30
}

for (let i in obj1) {
    console.log(i, obj1[i])
}

// ======================== try catch ================================================

// task 13: use the try catch block to catch an error and log the error message to console.

// ======================== object iteration ===========================================
// ======================== object keys and values =====================================
// ======================== object methods =============================================
// ======================== object properties ===========================================
// ======================== object property access =====================================
// ======================== object property assignment =================================