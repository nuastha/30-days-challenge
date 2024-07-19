// ===================== object ====================================

// object is a collection of key value pairs 
// object is a non-primitive data type
// object is a reference type data type 
// in JavaScript, objects are reference types. This means that when you assign an object to a variable, the variable stores a reference to the object, not the actual object itself. This allows multiple variables to reference the same object.
// example 
const obj1 = { name: "John" };
const obj2 = obj1;

console.log(obj2); // Output: { name: "John" }

obj2.name = "Jane";

console.log(obj1); // Output: { name: "Jane" }

console.log(obj2); // Output: { name: "Jane" } because this is pointing same object in different memory location

// task 1: write a program to create an object and log the result to the console.
let myObject = {
    1: 1,
    2: 2,
    3: 4
};
console.log(myObject);


// task 2: write a program to create an object using constructor method and log the result to the console.

let myObject1 = new Object();
console.log(myObject1)

// task 3: create an objects representing a book with properties like title, author, and year and log the result to the console.

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
}
console.log(book)


// task 4: create an objects representing a student with properties like name, age, and grade and log the result to the console.

let student = {
    name: "John",
    age: 20,
    grade: 8.5
}
console.log(student)

// task 5: access and log the title and author properties of the book object.

let book1 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
}
console.log(book1.title)
console.log(book1.author)

// task 6: access and log the name, age, and grade properties of the student object.

let student1 = {
    name: "John",
    age: 20,
    grade: 8.5
}
console.log(student1.name)
console.log(student1.age)
console.log(typeof student1.grade)

// ================== object methods ===============================

// task 8: add a method to the book object that return string with the book of title and author, then log the updated result to the console.

let book2 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    check: function () {
        console.log(this.title + " was written by " + this.author)
    }
}

book2.check()

// task 8: add a method to the book object that takes a parameter (year) and update the book year property, then log the updated result to the console.

let book3 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    updateYear: function (year) {
        this.year = year
        console.log(this)
    }
}

console.log(book3)
book3.updateYear(2020)
console.log(book3)


// ====================== nested objects =====================================

// task 9: create a nested object with the following properties: name, age, and address 

let person = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
}

console.log(person)

// task 10: create a nested object representing a library with properties like name and book (an array of of book object) and log the updated result to the console.

let library = {
    name: "My Library",
    book: [
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        }
    ]
}
console.log(library)
for (let i = 0; i < library.book.length; i++) {
    console.log(library.book[i].author)
}

// =================== the 'this' keyword ===========================================

// task 11: add a method to the book object that takes a parameter (year) and update the book year property, then log the updated result to the console.

let book4 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    updateYear: function (year) {
        this.year = year
        console.log(this.author)
        console.log(this.year)
    }
}
console.log(book4)
book4.updateYear(2024)

// ====================== object iteration ================================

// task 12: use a for ... in loop to iterate over properties of book object and log the each property and it's value.

let book5 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
}
for (let property in book5) {
    console.log(property)
    console.log(book5[property])
}

// task 12: use object.keys and objects.value methods to log all keys and value of the book object.

let book6 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
}

let keys = Object.keys(book6)
let values = Object.values(book6)

console.log(keys)
console.log(values)