// ============================== day 10 event handling =============================

// ==================== basic event handling =================================

// task 1: add a click event listener to a button that changes the text content of the a paragraph.

document.querySelector("button").addEventListener("click", function () {
    document.querySelector("p").textContent = "Hello, World!";
})

// task 2: add a mouseover event listener to a paragraph that changes the background color of the paragraph to red.

document.querySelector("p").addEventListener("mouseover", function () {
    document.querySelector("p").style.backgroundColor = "red";
})

// task 3: add a mouseout event listener to a paragraph that changes the background color of the paragraph to white.

document.querySelector("p").addEventListener("mouseout", function () {
    document.querySelector("p").style.backgroundColor = "white";
})

// task 4: add a double click event listener to an image that toggle it's visibility.

// pseudo code

// if image is visible
//     make it invisible
// else
//     make it visible
document.querySelector("img").addEventListener("dblclick", function () {
    document.querySelector("img").style.visibility = "hidden";
})

// ==================== advanced event handling ================================

// task 5: add a mouseenter event listener to an image that changes its opacity to 0.5.

document.querySelector("img").addEventListener("mouseenter", function () {
    document.querySelector("img").style.opacity = "0.5";
})

// task 6: add a mouseleave event listener to an image that changes its opacity to 1.

document.querySelector("img").addEventListener("mouseleave", function () {
    document.querySelector("img").style.opacity = "1";
})

// ==================== keyboard event handling ================================

// task 7: add a keydown event listener to the body that logs the key code to the console.

document.body.addEventListener("keydown", function (event) {
    console.log(event.keyCode);
})

// task 8: add a keyup event listener to the body that logs the key code to the console.

document.body.addEventListener("keyup", function (event) {
    console.log(event.keyCode);
})

// task 9: add a keypress event listener to the body that logs the key code to the console.

document.body.addEventListener("keypress", function (event) {
    console.log(event.keyCode);
})


//  ============================== form events ===============================

// task 9: add a submit event listener to a form that prevents the default submission and logs the form data to the console.

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData.get('checking')); // logs the value of the input field with name "checking"
    const formDataButton = event.target.elements[1].addEventListener('click', function () {
        const formData = new FormData(event.target);
        console.log(formData.get('checking')); // logs the value of the input field with name "checking"
    }, false);
    console.log(formDataButton);
}, false);

// task 10: add a change event to a select dropdown that displays the select value in a paragraph.
document.querySelector("select").addEventListener("change", function () {
    document.querySelector("p").textContent = this.value;
})

// =========================== event delegation ================================

// task 11: add an event listener to a parent element that listens for clicks on child elements and logs the clicked element's text content to the console.

document.querySelector(".parent").addEventListener("click", function (event) {
    console.log(event.target.textContent);
})

// task 12: add a click event listener to a list that logs the text content of the click list item using event delegation.

document.querySelector("ul").addEventListener("click", function (event) {
    console.log(event.target.textContent);
})

// task 13: add an event listener to a parent element that listen for events from dynamically added child element.

document.querySelector(".parent").addEventListener("click", function (event) {
    console.log(event.target.textContent);
}, true)
