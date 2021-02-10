
// 1. create 2 book objects with properties: name, author, year.

bookOne = {
  name: 'Badolina' ,

  author: 'Gabi Nitzan' ,

  year: 1999 ,

}

bookTwo = {
  name: 'The Hobbit' ,

  author: 'Tolkien' ,

  year: 1937 ,
  
}


// 2. create an empty object bookUtils (utils = short for utilities).

bookUtils = {}


// 3. add to to the bookUtils object a function getFirstPublished, that recieves 2 books and returns the book with the smaller year.

bookUtils.getFirstPublished = function (bookOne , bookTwo) {
  if( bookOne.year < bookTwo.year ){
  return bookOne
  }
  else return bookTwo
};

console.log(bookUtils.getFirstPublished(bookOne , bookTwo))

// 4. add to to the bookUtils object a function setNewEdition, that recieves a book and an edition year and sets a new property 
// latestEdition with the edition year, or updates an existing one.

bookUtils.setNewEdition = function (book , year) {

  return book.latestEdition = year
}

console.log(bookUtils.setNewEdition(bookOne , 700))
console.log(bookUtils.setNewEdition(bookOne , 800))

console.log(bookOne)


// 5. add to to the bookUtils object a setLanguage function, that recieves a book and a 
// language and sets a new property language with the languahe, or updates an existing one.

bookUtils.setLanguage = function (book , language) {

  return book.language = language
}

console.log(bookUtils.setLanguage(bookOne , 'hebrew'))
console.log(bookUtils.setLanguage(bookOne , 'arabic'))

console.log(bookOne)

// 6. add to to the bookUtils object a setTranslation function, that recieves a book a language and a translator,
//  and sets a new property of translation, which is an object that contains the translator and the language.

bookUtils.setTranslation = function (book , language , translator) {

  return book.translation = {language , translator} 
}

console.log(bookUtils.setTranslation(bookOne , 'hebrew', 'Avi'))

console.log(bookOne)



// 7. add to to the bookUtils object a setPublisher function, that recieves a book a name and a location, and sets a 
// new property named publisher, which is an object that contains the name and location.

bookUtils.setPublisher = function (book , name , location) {

  return book.publisher = {name , location} 
}

console.log(bookUtils.setPublisher(bookOne , 'Dov', 'Israel/India'))
console.log(bookUtils.setPublisher(bookTwo , 'Dov', 'Israel/India'))

console.log(bookOne)



// 8. add to to the bookUtils object a function isSamePublisher, that recieves 2 books and checks 
// if the publisher name and location are identical in the 2 books.

bookUtils.isSamePublisher = function (bookOne , bookTwo) {
  let isSimilar = true
  isSimilar = isSimilar ? (bookOne.publisher.name  === bookTwo.publisher.name) && (bookOne.publisher.location === bookTwo.publisher.location) :
  (bookOne.publisher.name  !== bookTwo.publisher.name) || (bookOne.publisher.location !== bookTwo.publisher.location);
  
  return isSimilar 
}

console.log(bookUtils.isSamePublisher(bookOne , bookTwo))

