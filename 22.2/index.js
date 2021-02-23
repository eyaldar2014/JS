// console.log('a')

// Create a webpage that has a checkbox. If the checkbox is checked, make a photo appear. If it is not, make it disappear.


let checkbox = document.querySelector('#checkbox')

let photo = document.querySelector('#photo')


document.addEventListener('click', (e)=>{

  if (checkbox.checked === true) {
    photo.style.display = 'block'
  }
  
  if (checkbox.checked === false) {
    photo.style.display = 'none'
  }

})