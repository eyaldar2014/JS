// Create a variable that holds the <li> element with the class “start-here”.
// Use traverse methods to complete these tasks:
// 1. Change the text from “title 2” to “main title”
// 2. Add another sub title with the text “sub title 4”
// 3. Delete the last <li> element from the list.
// 4. Change the <title> element text to “Master Of The Dom”.

// 5. Change the text of the <p> element ot something else of your


const myLi = document.querySelector('.start-here')
myLi.innerHTML = 'main tytle'

const newSub = document.createElement('li')
newSub.innerHTML = 'sub title 4'
const uls = document.querySelectorAll('ul')
uls[1].appendChild(newSub)

const x = document.querySelectorAll('li')
x[x.length - 1].remove()

x[0].innerHTML = 'Master Of The Dom'

const p = document.querySelector('p')
p.innerHTML = 'batata batata'