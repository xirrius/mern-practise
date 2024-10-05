// Selecting an element
// getelementbyid getelementsbyclassname queryselector queryselectorAll getelementbytagname

// const elements = document.getElementsByClassName('list-items') //HTML collection return karega (not array) forEach() - use nhi kr skte
// const listItem1 = document.getElementsByClassName('list-items');

// for(let i = 0; i < elements.length; i++) {
// elements[i].style.color = "red" - styling an element
// }

// const listItem = document.querySelectorAll('.list-items');

// console.log(listItem1)
// console.log(listItem)

// const listItem = document.createElement('div')
// container.appendChild(listItem) - element
// container.append(listItem) - string values

// TEXT MODIFICATION - innerHTML, innerText, textContent

// const listItem = document.querySelector('.list-items');

// console.log(listItem.innerHTML)
// console.log(listItem.innerText)
// console.log(listItem.textContent)

// ATTRIBUTES

// listItem.setAttribute('class', "another-class");
// console.log(listItem.getAttribute('style')); // "display: inline"
// listItem.removeAttribute('style');

// Class Names
// element.classList

// listItem.classList.add('new-class')
// listItem.classList.remove('list-items')
// console.log(listItem.classList.contains('new-class'))

// remove - element.remove()
// listItem.remove()

// Navigate DOM

// parent
// console.log(listItem.parentElement)
// const html = document.getElementsByTagName("html")
// console.log(html[0].parentNode)
// console.log(html[0].parentElement)

//child - node & element
// node - childNodes, firstChild, lastChild
// console.log(ul.firstChild)
// console.log(ul.lastChild)

// element - children , firstElementChild, lastElementChild
// console.log(ul.children);

// sibling - previous, next
// const li = document.querySelector("li");

// console.log(li);
// console.log(li.previousElementSibling);
// console.log(li.nextElementSibling);

// event listener

// const div = document.querySelector(".container");
// const ul = document.querySelector("ul");
// const button = document.querySelector("button");
// const html = document.documentElement

// window.addEventListener("click", () => {
//     console.log('window event.');
// }, )
// html.addEventListener("click", () => {
//     console.log('html event.');
// }, {once: true})

// div.addEventListener("click", (e) => {
//     console.log('div container event.');
//     // e.stopPropagation()
// }, )

// button.addEventListener("click", () => {
//   console.log("button tag event.");
// },);

// true - event capturing
// doc -> html -> div -> button

// false - event bubbling
// button -> div -> html -> doc


// Event Delegation
// dher sare children ho. aur sbko listener allot krna ho. separately code likhne ke alawa. 
// container ko hi listener de do
// ul -> 4-5 li (hover = color change)
// ul.addEventListener('click', (e) => {
//    if (e.target.matches('li')) {
//     e.target.style.color = 'red'
//    }
// })


const icon = document.querySelector('.icon')
const smallNav = document.querySelector('.small-screen-links')

icon.addEventListener("click", () => { 
    if(smallNav.classList.contains('active')) {
        smallNav.classList.remove('active')
        icon.innerHTML = `<i class="fa-solid fa-bars"></i>`
    } else {
        smallNav.classList.add('active')
        icon.innerHTML = `<i class="fa-solid fa-x"></i>`
    }
})