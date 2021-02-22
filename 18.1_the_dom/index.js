
function createSmily() {

  // delete previous content
  document.getElementById('smilyContainer').innerHTML = ''
  
  
  // missing deep check if input is actually a number : for example, "g4" will be read as 4. but its for smilies.... ';-]

  let value = parseFloat(document.getElementById('ta').value)

  if (value % 1 === 0 && value > 0) {


    for (let i = 0; i < value; i++) {
      createSmily2()
    }
  }
  else {
    createError()
  }
}

function createSmily2() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const image = document.createElement('img')
  image.style.height = '100px'
  image.style.margin = '10px'
  image.src = 'smily.png'

  const newContent = image

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  smilyContainer.insertBefore(newDiv, null);

}
function createError() {
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.innerHTML = 'not a number'

  // add the newly created element and its content into the DOM
  smilyContainer.insertBefore(newDiv, null);

}