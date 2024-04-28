const books = require('../data/books')
const { nanoid } = require('nanoid')
const {
  errBadEditReqName,
  errBadReqName,
  errBooksNotFound,
  errDeleteIdNotfound,
  errInvalidReadPage,
  errInvalidUpdateReadPage,
  errUpdateIdNotFound,
} = require('./../utils/error.response')

const {
  responseSuccess,
  responseSuccessNoMsg,
} = require('./../utils/success.response')

const {
  searchBooks,
  searchBooksbyFinished,
  searchBooksbyId,
  searchBooksbyReading,
  getIndexBooksbyId,
} = require('./../utils/utils')

module.exports = {
  addBooks: (request, h) => {
    const { name, pageCount, readPage, ...bookPayload } = request.payload

    if (!name) {
      return h.response(errBadReqName).code(400)
    }

    if (readPage > pageCount) {
      return h.response(errInvalidReadPage).code(400)
    }
    const id = nanoid(16)
    const finished = readPage === pageCount
    const now = new Date().toISOString()
    const insertedAt = now
    const updatedAt = now

    const newBooks = {
      id: id,
      name,
      ...bookPayload,
      pageCount,
      readPage,
      finished,
      insertedAt,
      updatedAt,
    }

    books.push(newBooks)

    return responseSuccess(h, 'Buku berhasil ditambahkan', { bookId: id }, 201)
  },
  getBooks: (request, h) => {
    const { name, reading, finished } = request.query
    let filteredBooks = books
    if (name) {
      filteredBooks = searchBooks(filteredBooks, name)
    }
    if (reading !== undefined) {
      filteredBooks = searchBooksbyReading(
        filteredBooks,
        Boolean(Number(reading))
      )
    }

    if (finished !== undefined) {
      filteredBooks = searchBooksbyFinished(
        filteredBooks,
        Boolean(Number(finished))
      )
    }

    return responseSuccessNoMsg(h, { books: filteredBooks }, 200)
  },
  getBooksById: (request, h) => {
    const { bookId } = request.params
    const book = searchBooksbyId(books, bookId)
    if (!bookId) {
      return h.response(errBooksNotFound).code(404)
    }

    if (!book) {
      return h.response(errBooksNotFound).code(404)
    }

    return responseSuccessNoMsg(h, { book }, 200)
  },
  deleteBooksById: (request, h) => {
    const { bookId } = request.params
    const bookIndex = getIndexBooksbyId(books, bookId)
    if (!bookId) {
      return h.response(errDeleteIdNotfound).code(404)
    }

    if (bookIndex < 0) {
      return h.response(errDeleteIdNotfound).code(404)
    }

    books.splice(bookIndex, 1)

    return h
      .response({
        status: 'success',
        message: 'Buku berhasil dihapus',
      })
      .code(200)
  },
  updateBookById: (request, h) => {
    const { bookId } = request.params
    const { name, pageCount, readPage, ...bookPayload } = request.payload
    const bookIndex = getIndexBooksbyId(books, bookId)
    if (!bookId) {
      return h.response(errUpdateIdNotFound).code(404)
    }

    if (bookIndex < 0) {
      return h.response(errUpdateIdNotFound).code(404)
    }

    if (!name) {
      return h.response(errBadEditReqName).code(400)
    }

    if (readPage > pageCount) {
      return h.response(errInvalidUpdateReadPage).code(400)
    }

    books.splice(bookIndex, 1, { ...books[bookIndex], ...bookPayload })

    return h
      .response({
        status: 'success',
        message: 'Buku berhasil diperbarui',
      })
      .code(200)
  },
}
