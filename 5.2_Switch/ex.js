
// 1. Create a function that takes one parameter, a language.
// 2. Use a switch statement to log the following string for the given 'language':
// mandarin: 'MOST number of native speakers!' spanish: '2nd place in number of native speakers' english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Not in the top 5'

const languageType = (language) =>{
  switch (language) {
    case 'mandarin': console.log('MOST number of native speakers!');     break;
    case 'spanish': console.log('2nd place in number of native speakers');     break;
    case 'english': console.log('3rd place');     break;
    case 'hindi' : console.log('Number 4');    break;
    default : console.log('Not in the top 5');     break;
  }
}


languageType("b")