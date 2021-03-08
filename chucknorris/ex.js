
// code comments
//
// make a class for the pictures to make it simpler to apply them - css
//
//on 'async function getACategoryJoke()' , the right way to use select : (also map / for each options)
// console.log(jokeCategory.options) // not working
// console.log(jokeCategory.value) // working


// api's ----------------------------------------------------------------------------------------------------

const mainApi = 'https://api.chucknorris.io/jokes/random'
const jokeCategoryApi = 'https://api.chucknorris.io/jokes/categories'
const pictureApi = 'https://dog.ceo/api/breeds/image/random'
const pictureCategoryApi = 'https://dog.ceo/api/breeds/list/all'


// page elements --------------------------------------------------------------------------------------------
const body = document.querySelector('body')

// joke elements ------------------------------------------------

// title joke
const jokeTitle = document.createElement('div')
jokeTitle.innerHTML = "joke here :"
body.appendChild(jokeTitle)

//joke form
const jokeContainer = document.createElement('form')
jokeContainer.style.display = 'flex'
jokeContainer.style.flexDirection = 'column'
body.appendChild(jokeContainer)

// jokeGenerator by number
const jokeGenerator = document.createElement('input')
jokeGenerator.type = 'number'
const label = document.createElement('label')
label.for = 'jokeGenerator'
label.innerHTML = 'choose a number'
jokeContainer.appendChild(label)
jokeContainer.appendChild(jokeGenerator)

// dropdown category of jokes
const jokeCategory = document.createElement('select')
jokeCategory.name = 'category'
const newlabel = document.createElement('label')
newlabel.for = 'jokeCategory'
newlabel.innerHTML = 'choose a category'
jokeContainer.appendChild(newlabel)
jokeContainer.appendChild(jokeCategory)

allCategories()
// get array of all jokes categories and create options in select drop-down menu
async function allCategories() {

  const apiInfo = await fetch(jokeCategoryApi)
  const apiData = await apiInfo.json()
  // console.log(apiData)

  apiData.forEach(cate => {
    const newcategory = document.createElement('option')
    newcategory.value = cate
    newcategory.innerHTML = cate
    jokeCategory.appendChild(newcategory)
  })
}

// joke button
const getAjokeNow = document.createElement('input')
getAjokeNow.type = 'button'
getAjokeNow.value = 'getAjokeNow'
getAjokeNow.onclick = start
body.appendChild(getAjokeNow)

// picture elements ------------------------------------------------

// title picture
const pictureTitle = document.createElement('div')
pictureTitle.innerHTML = "picture here :"
pictureTitle.style.marginTop = '20px'
body.appendChild(pictureTitle)

//picture form
const pictureContainer = document.createElement('form')
pictureContainer.style.display = 'flex'
pictureContainer.style.flexDirection = 'column'
body.appendChild(pictureContainer)

// pictueGenerator by number
const pictureGenerator = document.createElement('input')
pictureGenerator.type = 'number'
const picNumlabel = document.createElement('label')
picNumlabel.for = 'pictureGenerator'
picNumlabel.innerHTML = 'choose a number'
pictureGenerator.appendChild(picNumlabel)
pictureContainer.appendChild(pictureGenerator)

// dropdown category of pictures
const pictureCategory = document.createElement('select')
pictureCategory.name = 'category'
const picturelabel = document.createElement('label')
picturelabel.for = 'pictureCategory'
picturelabel.innerHTML = 'choose a category'
pictureCategory.appendChild(picturelabel)
pictureContainer.appendChild(pictureCategory)

allCategoriesPictures()
// get array of all dogs categories and create options in select drop-down menu
async function allCategoriesPictures() {

  const apiInfo = await fetch(pictureCategoryApi)
  const apiData = await apiInfo.json()

  let newArray = []
  for (let key in apiData.message) {
    newArray.push(key)
  }
  let allOptions = newArray.map((cate) => {
    return '<option>' + cate + '</option>'
  })
  pictureCategory.innerHTML = allOptions

}

//button random picture
const getPicture = document.createElement('input')
getPicture.type = 'button'
getPicture.value = 'get random pictures'
getPicture.onclick = startPicture
body.appendChild(getPicture)

// create and position the API inputs (joke & picture) ------------------------------------------------

//the joke
const joke = document.createElement('div')
body.appendChild(joke)
const newJoke = document.createElement('div')
joke.appendChild(newJoke)

//the picture
const picture = document.createElement('div')
picture.style.display = 'grid'
picture.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr'
body.appendChild(picture)
const newpicture = document.createElement('div')
picture.appendChild(newpicture)


// functions -----------------------------------------------------------------------------------------------

// joke functions ------------------------------------------------

//get a joke onclick - 2 options
function start() {

  joke.innerHTML = ''
  picture.innerHTML = ''

  if (jokeGenerator.value > 0) {
    for (let i = 0; i < jokeGenerator.value; i++) {
      getAjoke()
    }
  }

  else {
    getACategoryJoke()
  }
}

// a random joke
async function getAjoke() {

  const apiInfo = await fetch(mainApi)
  const apiData = await apiInfo.json()

  const newJoke = document.createElement('div')

  newJoke.innerHTML = apiData.value
  joke.appendChild(newJoke)
}

// random Joke by category
async function getACategoryJoke() {

  const selected = jokeCategory.options[jokeCategory.selectedIndex].value

  const apiInfo = await fetch('https://api.chucknorris.io/jokes/random?category=' + selected)
  const apiData = await apiInfo.json()

  const newJoke = document.createElement('div')
  newJoke.innerHTML = apiData.value
  joke.appendChild(newJoke)
}

// picture functions ------------------------------------------------

//get a picture onclick - 2 options
function startPicture() {

  joke.innerHTML = ''
  picture.innerHTML = ''

  if (pictureGenerator.value > 0 && pictureGenerator.value < 51) {
    getApicture()
  }
  else {
    getApictureByCategory()
  }
}

// get and desplay random picture
async function getApicture() {

  const apiInfo = await fetch(pictureApi + '/' + pictureGenerator.value)
  const apiData = await apiInfo.json()

  apiData.message.forEach(pic => {
    const newPicture = document.createElement('div')
    newPicture.classList = 'pic'
    let text = 'url(' + pic + ')'
    newPicture.style.backgroundImage = text
    picture.appendChild(newPicture)
  })
}

// random picture by category
async function getApictureByCategory() {

  const selected = pictureCategory.options[pictureCategory.selectedIndex].value

  const apiInfo = await fetch('https://dog.ceo/api/breed/' + selected + '/images/random')
  const apiData = await apiInfo.json()

  const newPicture = document.createElement('div')
  newPicture.classList = 'pic'
  let text = 'url(' + apiData.message + ')'
  newPicture.style.backgroundImage = text
  picture.appendChild(newPicture)
}


