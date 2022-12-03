function createTitle(title) {
    return `The ${title}` 
}

function buildMainCharacter(name, age, pronouns) {
var character = {
  name: name,
  age: age,
  pronouns: pronouns
}
return character
}

function saveReview(review, array) {
  if (array.includes(review) === false)
  array.push(review)
}

function calculatePageCount(bookTitle) {
  var bookPageCount = bookTitle.length * 20
  return bookPageCount;

}
function writeBook(createTitle, bookCharacter, genre) {
  var book = {
    title: createTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(createTitle),
    genre: genre
  }

  return book
}


    




module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  // editBook
}