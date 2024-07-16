// ============================== operators ===========================================

// ========================= 1. arithmetics operators =================================

// task 1: write a program to add two numbers and log the result to the console.  
let num1 = 5;
let num2 = 3;
let sum = num1 + num2;
console.log(sum);

// task 2: write a program to subtract two numbers and log the result to the console.  
let number1 = 34
let number2 = 12
let difference = number1 - number2
console.log(difference)

// task 3: write a program to multiply two numbers and log the result to the console. 
let firstNum = 15
let secondNum = 5
let product = firstNum * secondNum
console.log(product)

// task 4: write a program to divide two numbers and log the result to the console.  
let one = 19
let two = 5
let quotient = one / two
console.log(quotient)

// task 5: write a program to find the remainder when one number is divided by another number and log the result to the console. 
let remainder = one % two
console.log(remainder)

// =========================== 2. assignment operators ===================================

// task 6: use the += operator to add a number to a variable and log the result to the console.
let num = 5
num += 3
console.log(num)

// task 7: use the -= operator to add a number to a variable and log the result to the console.
let age = 25
age -= 5
console.log(age)

// ============================ 3. comparison operators ==========================================

// task 8: write a program to compare two number using > and < and log the result to console.
let num4 = 5
let num3 = 3
// using >
if (num4 > num3) {
    console.log("first num is greater than last num")
}
else {
    console.log("first num is not greater than last num")
}

// using <
if (num4 < num3) {
    console.log("first num is greater than last num")
}
else {
    console.log("first num is not greater than last num")
}

// task 9: write a program to compare two number using >= and <= and log the result to console.
let num5 = 5
let num6 = 3
// using >=
if (num5 >= num6) {
    console.log("first num is greater than or equal to last num")
}
else {
    console.log("first num is not greater than or equal to last num")
}
// using <=
if (num5 <= num6) {
    console.log("first num is greater than or equal to last num")
}
else {
    console.log("first num is not greater than or equal to last num")
}

// task 10: write a program to compare two number using == and === and log the result to console.
let num7 = 5
let num8 = 3
// using ==
if (num7 == num8) {
    console.log("first num is equal to last num")
}
else {
    console.log("first num is not equal to last num")
}

// using ===
if (num7 === num8) {
    console.log("first num is equal to last num")
}
else {
    console.log("first num is not equal to last num")
}

// task 11: write a program to compare two number using != and !== and log the result to console.
let num9 = 5
let num10 = 3

// using !=
if (num9 != num10) {
    console.log("first num is not equal to last num")
}
else {
    console.log("first num is equal to last num")
}

// using !==
if (num9 !== num10) {
    console.log("first num is not equal to last num")
}
else {
    console.log("first num is equal to last num")
}

// =========================== 4. logical operators =======================================

// task 12: write a program that use the && operator to combine two conditions and log the result to console.
let num11 = 5
let num12 = 3
if (num11 > num12 && num11 > 0) {
    console.log("first num is greater than last num")
}
else {
    console.log("first num is not greater than last num")
}

// task 13: write a program that use the || operator to combine two conditions and log the result to console.
let num13 = 5
let num14 = 3
if (num13 > num14 || num13 > 0) {
    console.log("first num is greater than last num")
}
else {
    console.log("first num is not greater than last num")
}

// task 14: write a program that use the ! operator to negate a conditions and log the result to console.
let num15 = 5
let num16 = 3
if (!(num15 > num16)) {
    console.log("first num is greater than last num")
}
else {
    console.log("first num is not greater than last num")
}

// =========================== 5. ternary operators =======================================

// task 15: write a program use that ternary operators and log to the result in console.
let num17 = 5
let num18 = 3
let result = num17 > num18 ? "first num is greater than last num" : "first num is not greater than last num"
console.log(result)

// =========================== 6. nullish coalescing operator =============================

// task 16: write a program use that nullish coalescing operators and log to the result in console.
let num19 = 5
let num20 = 3
let result1 = num19 ?? num20
console.log(result1)

// =========================== 7. object operators ========================================

// task 17: write a program use that object operators and log to the result in console.
let num21 = 5
let num22 = 3
let result2 = num21 ?? num22
console.log(result2)

// =========================== 8. bit operators  ==========================================

