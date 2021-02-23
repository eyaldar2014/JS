// console.log('a')

let name = document.querySelector('#name')
let age = document.querySelector('#age')
let email = document.querySelector('#email')
let btn = document.querySelector('#btn')

console.log('name')
console.log('age')
console.log('email')

function clicK() {
  // console.log('a')

  if (btn.value === 'Submit') {

    const newp = document.createElement('p')
    newp.innerHTML = 'has been submitted'
    document.getElementById('head').appendChild(newp)

    btn.disabled = true
  }

  if (btn.value === 'Review') {
    myWindow = window.open("", "myWindow", "width=200px,height=100px");
    myWindow.document.write('your name is :' + name.value + ' ')
    myWindow.document.write('your age is :' + age.value + ' ')
    myWindow.document.write('your email is :' + email.value + ' ')
    myWindow.document.write(' for confirmation click submit, for change just type freely')

    btn.value = 'Submit'
  }

  document.addEventListener('keyup', (e) => {
    btn.value = 'Review'
    myWindow.close()
  })

}




