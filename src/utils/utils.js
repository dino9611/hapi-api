module.exports.searchBooks = (filteredBooks, searchTerm) => {
  const regex = new RegExp(`\\b${searchTerm}\\b`, 'i');

  return filteredBooks.filter((item) => regex.test(item.name));
};

module.exports.searchBooksbyReading = (filteredBooks, reading) => {
  const condition = (item) => item.reading === reading;
  return filteredBooks.filter(condition);
};

module.exports.searchBooksbyFinished = (filteredBooks, finished) => {
  const condition = (item) => item.finished === finished;
  return filteredBooks.filter(condition);
};
module.exports.searchBooksbyId = (filteredBooks, bookId) => {
  const condition = (item) => item.id === bookId;
  return filteredBooks.find(condition);
};

module.exports.getIndexBooksbyId = (filteredBooks, bookId) => {
  const condition = (item) => item.id === bookId;
  return filteredBooks.findIndex(condition);
};
