function createLibrary(library) {
  return {
    name: library,
    shelves: {
      fantasy: [], fiction: [], nonFiction: []
    } 
  }
}

function addBook(library, book) {
library.shelves[book.genre].push(book)
}

function checkoutBook(library, book, genre) {
  var findBook = library["shelves"][genre]
  for (i = 0; i < findBook.length; i++) {
    if (book === findBook[i].title)
  findBook.splice(i, 1)
  return `You have now checked out ${book} from the ${library.name}`
  }
  return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
}



module.exports = {
   createLibrary,
   addBook,
   checkoutBook
};