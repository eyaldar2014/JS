var library = [
  {
  author: "Bill Gates", 
  title: "The Road Ahead", 
  readingStatus: true
  },
  {
  author: "Steve Jobs",
  title: "Walter Isaacson",
  readingStatus: true
  },
  {
  author: "Suzanne Collins",
  title: "Mockingjay: The Final Book of The Hunger Games", 
  readingStatus: false
  }
  ];

// Write a JavaScript function that receives the following library object as an input and displays the books that can be read 
// (the reading status is true). Log the book name, author name and reading status .

const display = (library) =>{
  let availableBooks = library.filter(b => b.readingStatus === true)
  availableBooks.forEach(element => {
    console.log('book name: ' + element.title)
    console.log('author name: ' + element.author)
    console.log('book available')
  });

}

display(library)
