// ============================== loops ===========================================

// ========================= 1. for loop =================================

// task 1: write a program to print 1 to 10 using for loop and log the result to the console.
for (let i = 1; i <= 10; i++) {
    console.log(i, '-')
}

// task 2: write a program to print 10 to 1 using for loop and log the result to the console.       
for (let i = 10; i >= 1; i--) {
    console.log('-', i)
}

// task 3: write a program to print the multiplication table of 5 using for loop and log the result to the console.

for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`)
}

// ======================== 2. while loop =================================

// task 3: write a program calculate sum of 1 to 10 using while loop and log the result to the console.

let i = 1
let sum = 0
while (i <= 10) {
    sum += i
    console.log(sum)
    i++
}
console.log(sum)

// task 4: write a program to print 10 to 1 using while loop and log the result to the console.
let j = 10
while (j >= 1) {
    console.log(j)
    j--
}

// ========================= 3. do while loop =================================

// task 5: write a program to print 1 to 5 using do while loop and log the result to the console.  
let k = 1
do {
    console.log(k)
    k++
} while (k <= 5)

// task 6: write a program to calculate the factorial of a number using do while loop and log the result to the console.

let n = 5
let fact = 1
do {
    fact *= n
    n--
} while (n > 1)
console.log(fact)

// ========================= 4. nested loop =================================

// task 7: write a program to print a pattern using nested loop and log the result to the console.

for (let i = 1; i <= 5; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}

// ========================= 5. loop control statement =================================

// task 8: write a program to print numbers from 1 to 10 but skip 5 using continue statement in loop and log the result to the console.

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue
    }
    console.log(i)
}

// task 9: write a program to print numbers from 1 to 10 but stop the loop when number is 7 using break statement in loop and log the result to the console.

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break
    }
    console.log(i)
}

