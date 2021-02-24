// console.log('a')

function makeid() {

  let characters = 'abcdefghijklmnopqrstuvwxyz';
  let charactersLength = characters.length;
  result = characters.charAt(Math.floor(Math.random() * charactersLength));
  return result;
}

let myLetter = makeid()
console.log(myLetter);

const ins = document.querySelector('#ins')
const bin = document.querySelector('#bin')
const title = document.querySelector('#title')
const box = document.querySelector('#box')

let binArray = []

document.addEventListener('keyup', algorythm, true)

function algorythm(e) {

  if (e.key === myLetter) {
    trueletter()
  }

  else if (e.key >= 'a' && e.key <= "z") {
    // console.log('good')

    if (!binArray.includes(e.key)) {
      bin.innerHTML += e.key
      binArray.push(e.key)
      ins.style.color = 'red'
      ins.innerHTML = 'Nope, wrong Letter'
    }
    else {
      ins.style.color = 'red'
      ins.innerHTML = e.key + ' Has already been guessed'
    }
  }
  else {
    // console.log('not good')
    ins.style.color = 'red'
    ins.innerHTML = 'Please enter a valid letter'
  }
}

function trueletter() {
  console.log('done')

  ins.style.color = 'green'
  ins.innerHTML = 'Right Letter !'
  box.style.color = 'green'
  box.innerHTML = myLetter
  title.innerHTML = 'Would you like to play again?'

  document.removeEventListener('keyup', algorythm, true);

  const btn = document.createElement('button')
  btn.innerHTML = 'Yes'
  btn.style.backgroundColor = 'lightblue'
  btn.style.width = '100px'
  btn.style.hight = '40px'
  btn.style.padding = '20px'
  btn.style.fontSize = '25px'

  const action = document.createElement('a')
  action.href = 'index.html'

  bin.innerHTML = ''

  bin.append(action)
  action.append(btn)

}