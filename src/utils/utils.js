module.exports.searchBooks = (filteredBooks, searchTerm) => {
  const regex = new RegExp(`\\b${searchTerm}\\b`, 'i')

  return filteredBooks.filter((item) => regex.test(item.name))
}

module.exports.searchBooksbyReading = (filteredBooks, reading) => {
  return filteredBooks.filter((item) => item.reading === reading)
}

module.exports.searchBooksbyFinished = (filteredBooks, finished) => {
  return filteredBooks.filter((item) => item.finished === finished)
}

module.exports.searchBooksbyId = (filteredBooks, bookId) => {
  return filteredBooks.find((item) => item.id == bookId)
}
module.exports.getIndexBooksbyId = (filteredBooks, bookId) => {
  return filteredBooks.findIndex((item) => item.id == bookId)
}
