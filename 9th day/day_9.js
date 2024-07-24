// ==================== day 9 dom manipulation ======================

// ==================== selecting and manipulating elements =================

// task 1: select the element by it's id and change it's text content.

const heading = document.getElementById("heading")
console.log(heading)
heading.textContent = "greeting you people"
heading.style.color = '#cc3211'

// task 2: select the element by it's class and change it's background color.

const heading2 = document.getElementsByClassName("heading")
console.log(heading2.item(0))
heading2.item(0).style.background = '#bbc888'

// task 3: select the element by it's tag name and change it's text color.

const heading3 = document.getElementsByTagName("h1")
console.log(heading3.item(0))
heading3.item(0).style.fontSize = '8rem'

// =================== create and appending element ====================

// task 4: create a new element and append it to the parent element.

const parent = document.getElementsByTagName("body")
console.log(parent)
const newElement = document.createElement("div")
const newElement2 = document.createElement("h2")

newElement2.textContent = "hello world"
newElement.textContent = "hello world"
console.log(newElement)
document.body.append(newElement)
newElement.appendChild(newElement2)

// =================== remove and replace element ====================

// task 5: remove an element from the dom.

const parent2 = document.getElementsByTagName("body")
console.log(parent2)
const newElement3 = document.createElement("div")
const newElement4 = document.createElement("h2")

newElement4.textContent = "hello world"
newElement3.textContent = "hello world"
console.log(newElement3)
document.body.append(newElement3)
newElement3.appendChild(newElement4)

newElement4.remove()
newElement3.remove()

// task 6: replace an element with another element.

const parent3 = document.getElementsByTagName("body")
console.log(parent3)
const newElement5 = document.createElement("div")
const newElement6 = document.createElement("h2")

newElement6.textContent = "5555"
newElement5.textContent = "hello world"
console.log(newElement5)
document.body.append(newElement5)
newElement5.appendChild(newElement6)

newElement5.replaceWith(newElement6)

// =================== modifying and manipulating attributes or class ====================

// task 7: add an img tag and src to an element.


const newElement7 = document.createElement("img")
newElement7.src = 'https://images.unsplash.com/photo-1721548902888-36f759c71727?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
console.log(newElement7)
newElement7.alt = 'photo'
newElement7.style.width = '400px'
document.body.append(newElement7)



// task 8: remove a class from an element.

const parent5 = document.getElementsByTagName("body")
console.log(parent5)
const newElement9 = document.createElement("div")
const newElement10 = document.createElement("h2")

newElement10.textContent = "hello world"
newElement9.textContent = "hello world"
console.log(newElement9)
document.body.append(newElement9)
newElement9.appendChild(newElement10)

newElement10.classList.remove("heading")

// task 9: toggle a class on an element.

const parent6 = document.getElementsByTagName("body")
console.log(parent6)
const newElement11 = document.createElement("div")
const newElement12 = document.createElement("h2")

newElement12.textContent = "hello world"
newElement11.textContent = "hello world"
console.log(newElement11)
document.body.append(newElement11)
newElement11.appendChild(newElement12)

newElement12.classList.toggle("mac")

// ======================== event handling =======================

// task 10: add a click event listener to a button that changes the text content a paragraph.
const button = document.createElement('button')
button.textContent = 'click me'
document.body.append(button)
button.addEventListener('click', function () {
    const p = document.createElement('p')
    p.textContent = 'lorem ipsum hello world to programming'
    document.body.append(p)
})

// task 11: add a mouseover event listener to an element that changes border color.

button.addEventListener('mouseover', function () {
    document.querySelector('button').style.border = '2px solid black'
})

// task 12: add a mouseout event listener to an element that changes border color.
button.addEventListener('mouseout', function () {
    document.querySelector('button').style.border = ''
})