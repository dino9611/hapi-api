const bookHandler = require('../handlers/books.handler');

const booksRoutes = [
  {
    method: 'POST',
    path: '/books',
    handler: bookHandler.addBooks,
  },

  {
    method: 'GET',
    path: '/books',
    handler: bookHandler.getBooks,
  },

  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: bookHandler.getBooksById,
  },

  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: bookHandler.deleteBooksById,
  },

  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: bookHandler.updateBookById,
  },
];

module.exports = booksRoutes;
