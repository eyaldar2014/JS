// console.log('a')

const tas = document.querySelectorAll('.ta')
let tasArray = []
tasArray.push(tas[0])
tasArray.push(tas[1])
tasArray.push(tas[2])
tasArray.push(tas[3])
tasArray.push(tas[4])
tasArray.push(tas[5])


function verify() {
  if (tas[0].value === "1" && tas[1].value === "2" && tas[2].value === "3" && tas[3].value === "4" && tas[4].value === "5" && tas[5].value === "6") {
    console.log('success!')

  }
}


document.addEventListener('keyup', (event) => {
  
  let target = event.target;
  let x = tasArray.indexOf(target)

  if (target.value.length > 1) {
    event.target.value = ''
  }
// Move to next field if full
  if (tasArray[x].value.length === 1) {
    let next = tasArray[x + 1]
    if (next !== undefined) {
      next.focus();
    }
  }
  // Move to previous field if empty (user pressed backspace)
  else if (tasArray[x].value.length === 0) {
    let previous = tasArray[x - 1];
    if (previous) {
      previous.focus();
    }
  }
  if (tas[0].value === "1" && tas[1].value === "2" && tas[2].value === "3" && tas[3].value === "4" && tas[4].value === "5" && tas[5].value === "6") {
    document.getElementById('btn').disabled = true
  }
})


let paste

document.addEventListener('paste', (event) => {
  paste = (event.clipboardData || window.clipboardData).getData('text');
  pasteEvent()
})
function pasteEvent() {

  setTimeout(function () {

    // if (paste === '123456') {
    //   console.log('excellent!')
    // }

    console.log(paste)
    let array = paste.split('')

    if (array.length < 6) {
      for (let i = 0; array.length < 6; i++) {
        array.push('')
      }
    }

    for (let i = 0; i < 6; i++) {
      tas[i].value = array[i]
      // console.log(tas[i].value)
    }

    if (paste === '123456') {
      document.getElementById('btn').disabled = true
    }
  }, 0);
}