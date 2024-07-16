// day 1 task on 30 days challenge

// ============================ variables declaring ========================================

// 1. declare a variable using var, assign it a number, and log the value to the console
var num = 10;
console.log(num);

// 2. declare a variable using let, assign it a string, and log the value to the console
let str = "hello";
console.log(str);

// 3. declare a variable using const, assign it a boolean, and log the value to the console
const bool = true;
console.log(bool);

// 4. declare a variable using var, assign it an array, and log the value to the console
var arr = [1, 2, 3, 4, 5];
console.log(arr);

// 5. declare a variable using let, assign it an object, and log the value to the console
let obj = { name: "John", age: 30 };
console.log(obj);

// 6. declare a variable using const, assign it a function, and log the value to the console
const func = function () {
    console.log("hello");
};
func();

//  ================== check of data type using typeof operator =============================

// 1. check the data type of the variable num
console.log(typeof num, num);

// 2. check the data type of the variable str
console.log(typeof str, str);

// 3. check the data type of the variable bool
console.log(typeof bool, bool);

// 4. check the data type of the variable arr
console.log(typeof arr, arr);

// 5. check the data type of the variable obj
console.log(typeof obj, obj);

// 6. check the data type of the variable func
console.log(typeof func, func);

// ==================== reassign the variable  ========================================

// 1. reassign the variable num
num = 20;
console.log(num);

// 2. reassign the variable str
str = "world";
console.log(str);

// 3. reassign the variable bool
// bool = false;  // we can't reassign the value to constant it will give error
console.log(bool);

// 4. reassign the variable arr
arr = [6, 7, 8, 9, 10];
console.log(arr);

// 5. reassign the variable obj
obj = { name: "Jane", age: 25 };
console.log(obj);

// 6. reassign the variable func
// func = function () {        // this function also a constant value and it will give error
//     console.log("goodbye");
// };
// func();


//  ================== understanding of const immutability ======================

// 1. const variable can't be reassigned or empty
const number = 10;
console.log(num);

// number = 20  // this will give error
console.log(num);

// 2. let variable and var can be reassign 
let string = "hello";
console.log(string);

string = "world"
console.log(string);

var boolean = true;
console.log(boolean);

boolean = false
console.log(boolean);

