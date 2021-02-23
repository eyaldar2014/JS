// 1. Loop over the array with the forEach method and dynamically create an ordered list of the first and last names from the objects.
// 2. Remove the bullet points of the ordered list with javaScript.
// 2. Create a custom data attribute called “data-id” and attach the id value to each li.

const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

// 1. Loop over the array with the forEach method and dynamically create an 
// ordered list of the first and last names from the objects.

let body = document.querySelector('body')
let ol = document.createElement('ol')
body.appendChild(ol)

let array = []

users.forEach((e, index) => {
  if (index === 0 || index === users.length - 1) {

    let li = document.createElement('li')
    li.innerHTML = e.firstName
    ol.appendChild(li)
    array.push(e)
  }
})


// 2. Remove the bullet points of the ordered list with javaScript.
ol.classList.add('ol')
ol.style.listStyle = 'none'


// 3. Create a custom data attribute called “data-id” and attach the id value to each li.
let x = document.querySelectorAll('li')

x.forEach((e, index) => {
  let dataId = document.createAttribute("data-id")
  dataId.value = array[index].id
  e.setAttributeNode(dataId)
})

console.log(body)