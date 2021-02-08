
const countryToLiveIn = (language, isIsland, population, country) => {
  if (language === 'english' && isIsland === false && population < 50000000) {
    return console.log('You should live in ' + country)
    }
  else console.log(country + ' does not meet your criteria');
}

const optionA = countryToLiveIn('english', false, 1000, 'Italy');
