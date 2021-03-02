// console.log('k')

const basePoint = 'https://swapi.dev/api/people/'
const characters = []
let homeWorldAddress

// create table
const body = document.querySelector('body')
body.style.display = 'flex'
body.style.justifyContent = 'center'

const table = document.createElement('table')
async function getData() {

  const response = await fetch(basePoint)
  const data = await response.json()

  data.results.forEach(person => {
    let char = {}

    char.name = person.name
    char.Height = person.height
    char.Hair_Color = person.hair_color

    homeWorldAddress = person.homeworld
    getPlanet(char)
  });
}


getData()

async function getPlanet(character) {

  response = await fetch(homeWorldAddress)
  const planet = await response.json()

  character.planet = {}
  character.planet.Name = planet.name
  character.planet.Population = planet.population

  characters.push(character)

  if (characters.length === 10) {
    addToTable()
  }
};


function addToTable() {

  const text = '<th colspan="5">Star Wars</th><table id="myTable"><tr><td>name</td><td>hair</td><td>height</td><td>planet name</td><td>planet population</td></tr></table>'
  table.innerHTML = text
  table.style.border = '1px solid black'
  table.style.width = '60vw'
  table.style.marginTop = '10vw'
  body.appendChild(table)

  const td = document.querySelectorAll('td')
  td.forEach(single => {
    single.style.border = '2px solid green'
  })



  characters.forEach(char => {

    let tr = document.createElement('tr')
    table.appendChild(tr);

    for (let property in char) {
      // console.log(char[property])

      if (typeof char[property] !== 'object') {
        let td = document.createElement('td')
        td.innerHTML = char[property]
        td.style.border = '1px solid blue' //
        tr.appendChild(td);
      }

      else {
        for (let innerProperty in char[property]) {
          // console.log(char[property][innerProperty])

          let td = document.createElement('td')
          td.innerHTML = char[property][innerProperty]
          td.style.border = '1px solid red' //
          tr.appendChild(td);
        }
      }
    }
  })

  console.log(table.innerHTML)
}
    // td.innerHTML = char.name
    // tr.appendChild(td);
    // td = document.createElement('td')
    // td.innerHTML = char.Hair_Color
    // tr.appendChild(td);
    // td = document.createElement('td')
    // td.innerHTML = char.Height
    // tr.appendChild(td);
    // td = document.createElement('td')
    // td.innerHTML = char.planet.Name
    // tr.appendChild(td);
    // td = document.createElement('td')
    // td.innerHTML = char.planet.Population
    // tr.appendChild(td);


