// console.log('k')

const basePoint = 'https://swapi.dev/api/people/'
const characters = []
let homeWorldAddress

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
  if (characters.length === 10)
    addToTable()
};

// create table

const body = document.querySelector('body')
const text = '<th colspan="5">Star Wars</th><table id="myTable"><tr><td>name</td><td>hair</td><td>height</td><td>planet name</td><td>planet population</td></tr></table>'
const table = document.createElement('table')
table.innerHTML = text
table.style.border = '1px solid black'
body.appendChild(table)


function addToTable() {

  characters.forEach(char => {

    let tr = document.createElement('tr')
    table.appendChild(tr);
    let td = document.createElement('td')
    td.innerHTML = char.name
    tr.appendChild(td);
    td = document.createElement('td')
    td.innerHTML = char.Hair_Color
    tr.appendChild(td);
    td = document.createElement('td')
    td.innerHTML = char.Height
    tr.appendChild(td);
    td = document.createElement('td')
    td.innerHTML = char.planet.Name
    tr.appendChild(td);
    td = document.createElement('td')
    td.innerHTML = char.planet.Population
    tr.appendChild(td);

  })

  console.log(table.innerHTML)
}
