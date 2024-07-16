// =====================if/else statement =======================================

// task 1: write a program to check if a number is positive, negative or zero and log the result to the console.
let num = 5
if (num > 0) {
    console.log("positive")
}
else if (num < 0) {
    console.log("negative")
}
else {
    console.log("zero")
}

// task 2: write a program to check if person is eligible, to vote (age>=18) and log the result to the console.
let age = 17
if (age >= 18) {
    console.log("eligible to vote")
}
else {
    console.log("not eligible to vote")
}

// =====================nest if/else statement =======================================

// task 3: write a program to find the largest of three numbers using nested if/else statement.
let num1 = 5
let num2 = 3
let num3 = 2
if (num1 > num2) {
    if (num1 > num3) {
        console.log("num1 is largest")
    }
    else {
        console.log("num3 is largest")
    }
}
else {
    if (num2 > num3) {
        console.log("num2 is largest")
    }
    else {
        console.log("num3 is largest")
    }
}

// ===================== switch case =======================================

// task 4: write a program that use switch case to determine the day of the week based on a number (1-7) and log the result to the console.
let day = 3
switch (day) {
    case 1:
        console.log("sunday")
        break
    case 2:
        console.log("monday")
        break
    case 3:
        console.log("tuesday")
        break
    case 4:
        console.log("wednesday")
        break
    case 5:
        console.log("thursday")
        break
    case 6:
        console.log("friday")
        break
    case 7:
        console.log("saturday")
        break
    default:
        console.log("invalid day")
}

// task 5: write a program that use switch case to assign a grade ('a','b','c','d','f') based on a score and log the result to the console.
let score = "b"
switch (score) {
    case "a":
        console.log("excellent")
        break
    case "b":
        console.log("good")
        break
    case "c":
        console.log("average")
        break
    case "d":
        console.log("below average")
        break
    case "f":
        console.log("failed")
        break
    default:
        console.log("invalid score")
}

// =====================conditional (ternary) operator =======================================

// task 6: write a program that use ternary operator to check if number is odd or even and log the result to the console.
let num4 = 5
let result = num4 % 2 == 0 ? "even" : "odd"
console.log(result)

// =====================combining conditions  =======================================

// task 6: write a program to check if a year a leap year using multiple condition (divisible by 4, but not 100 unless also divisible 400 ) and log the result to the console.

let year = 2004
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log("leap year")
}
else {
    console.log("not a leap year")
}
