// ======================== array ====================================

// ======================== array creation ===========================

// task 1: create an array of numbers 1 to 5 and log the array to the console.

let arr = [1, 2, 3, 4, 5]
console.log(arr)

// task 2: create an array of strings and log the array to the console.

let arr1 = ["a", "b", "c", "d", "e"]
console.log(arr1)

// task 3: create an array of booleans and log the array to the console.

let arr2 = [true, false, true, false, true]
console.log(arr2)

// task 4: create an array of objects and log the array to the console.

let arr3 = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }]
console.log(arr3)

// task 5: create an array of arrays and log the array to the console.  

let arr4 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(arr4)

// task 6: create an array of function an log the array to the console.

let arr5 = [function () { console.log("hello") }, function () { console.log("world") }]
console.log(arr5)

// task 7: create an array of null and log the array to the console.

let arr6 = [null, null, null, null, null]
console.log(arr6)


// ========================== access the array item by index value =======================

// task 8: access the first item in the array and log the result to the console.

let arr7 = [1, 2, 3, 4, 5]
console.log(arr7[0])
console.log(typeof arr7[0])

// task 8: access the last item in the array and log the result to the console.

let arr8 = [1, 2, 3, 4, 5]
console.log(arr8[arr8.length - 1])
console.log(typeof arr8[arr8.length - 1])


// ========================== change the array item by index value =======================

// task 9: change the first item in the array and log the result to the console.

let arr9 = [1, 2, 3, 4, 5]
arr9[0] = 10
console.log(arr9)

// task 10: change the last item in the array and log the result to the console.

let arr10 = [1, 2, 3, 4, 5]
arr10[arr10.length - 1] = 10
console.log(arr10)


// ========================== array methods =======================

// task 11: add an item to the end of the array and log the result to the console.

let arr11 = [1, 2, 3, 4, 5]
arr11.push(6)
console.log(arr11)

// task 12: add an item to the beginning of the array and log the result to the console.

let arr12 = [1, 2, 3, 4, 5]
arr12.unshift(0)
console.log(arr12)

// task 13: remove an item from the end of the array and log the result to the console.

let arr13 = [1, 2, 3, 4, 5]
arr13.pop()
console.log(arr13)

// task 14: remove an item from the beginning of the array and log the result to the console.

let arr14 = [1, 2, 3, 4, 5]
arr14.shift()
console.log(arr14)

// task 15: find the index of an item in the array and log the result to the console.

let arr15 = [1, 2, 3, 4, 5]
console.log(arr15.indexOf(3))

// task 16: find the last index of an item in the array and log the result to the console.

let arr16 = [1, 2, 3, 4, 5]
console.log(arr16.lastIndexOf(3))


// task 17: sort the array in ascending order and log the result to the console.

let arr17 = [5, 3, 8, 2, 1]
arr17.sort()
console.log(arr17)


// task 18: sort the array in descending order and log the result to the console.

let arr18 = [5, 3, 8, 2, 1]
arr18.sort((a, b) => b - a)
console.log(arr18)


// task 19: reverse the array and log the result to the console.

let arr19 = [5, 3, 8, 2, 1]
arr19.reverse()
console.log(arr19)

// task 20: join the array into a string and log the result to the console.

let arr20 = [5, 3, 8, 2, 1]
console.log(arr20.join())
console.log(typeof arr20.join())

// task 21: split the string into an array and log the result to the console.

let str = 'man'
console.log(str.split(''))


// task 22: splice the array and log the result to the console.

let arr22 = [5, 3, 8, 2, 1]
console.log(arr22.splice(2, 3))
console.log(arr22)

// ====================== intermediate array method =============================

// task 23: use the map method to create a new array where each number is double and log the new array.

let arr23 = [1, 2, 3, 4, 5]
let newArr = arr23.map((num) => num * 2)
console.log(newArr)
console.log(arr23)

// task 24: use the filter method to create a new array where each number is greater than 3 and log the new array.

let arr24 = [1, 2, 3, 4, 5]
let filter = arr24.filter((num) => num > 3)
console.log(arr24)
console.log(filter)

// task 25: use the reduce method to calculate the sum of all the numbers in the array and log the result.

// Here's a step-by-step explanation of how the code works:

// 1. Initialize the array `arr25` with values `[1, 2, 3, 4, 5]`:
//    ```javascript
//    let arr25 = [1, 2, 3, 4, 5];
//    ```

// 2. Use the `reduce()` method on the `arr25` array:
//    ```javascript
//    let reduce = arr25.reduce((a, b) => a + b);
//    ```

// 3. The `reduce()` method takes a callback function as an argument. This callback function is executed on each element of the array and it takes two parameters:
//    - `a`: The accumulator that accumulates the callback's return values. In the beginning, it is the initial value or the first element of the array.
//    - `b`: The current element being processed in the array.

// 4. The callback function `(a, b) => a + b` adds the current element `b` to the accumulator `a`. The return value of the callback becomes the new accumulator for the next iteration.

// 5. The `reduce()` method iterates over each element of the array and applies the callback function to accumulate a single result.

// 6. Finally, the result of the `reduce()` operation is stored in the `reduce` variable and logged to the console:
//    ```javascript
//    console.log(reduce);
//    ```

// The code effectively sums up all the elements in the `arr25` array using the `reduce()` method and prints the total sum to the console.

let arr25 = [1, 2, 3, 4, 5]
let reduce = arr25.reduce((a, b) => a + b)
console.log(reduce)

// ====================== array iteration =========================================


// task 26: use the forEach method to log each number in the array.

// Here's a step-by-step explanation of how the code works:

// 1. Initialize the array `arr26` with values `[1, 2, 3, 4, 5]`:
//    ```javascript 
//    let arr26 = [1, 2, 3, 4, 5];
//    ```

// 2. Use the `forEach()` method on the `arr26` array:
//    ```javascript
//    arr26.forEach((num) => console.log(num));
//    ```

// 3. The `forEach()` method takes a callback function as an argument. This callback function is executed on each element of the array and it takes one parameter:
//    - `num`: The current element being processed in the array.

// 4. The callback function `(num) => console.log(num)` logs each element of the array to the console.

// 5. The `forEach()` method iterates over each element of the array and applies the callback function to each element.

// 6. The code effectively logs each element of the `arr26` array to the console using the `forEach()` method.

// The code effectively logs each element of the `arr26` array to the console using the `forEach()` method.

let arr26 = [1, 2, 3, 4, 5]
arr26.forEach((num) => console.log(num))

// task 27: use the for of loop to log each number in the array.

let arr27 = [1, 2, 3, 4, 5]
for (let num of arr27) {
    console.log(num)
}

// task 28: use the for loop to log each number in the array.

let arr28 = [1, 2, 3, 4, 5]
for (let i = 0; i < arr28.length; i++) {
    console.log(arr28[i])
}

// ============================ multi-dimensional array ==============================
//  In JavaScript, an array that contains one or more arrays is called a multi-dimensional array or a nested array.
//  A multi-dimensional array is an array that contains one or more arrays.

// task 29: create a two-dimensional array [matrix] and log the array to the console.

let arr29 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(arr29)

// task 30: access the first element of the array and log the result to the console.

let arr30 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(arr30[0])

// task 31: access and log a specific element from the two-dimensional array.

let arr31 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(arr31[0][0])