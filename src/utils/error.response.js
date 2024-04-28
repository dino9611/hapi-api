module.exports.errBadReqName = {
  status: 'fail',
  message: 'Gagal menambahkan buku. Mohon isi nama buku',
}

module.exports.errBadEditReqName = {
  status: 'fail',
  message: 'Gagal memperbarui buku. Mohon isi nama buku',
}

module.exports.errBooksNotFound = {
  status: 'fail',
  message: 'Buku tidak ditemukan',
}

module.exports.errInvalidReadPage = {
  status: 'fail',
  message:
    'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
}

module.exports.errInvalidUpdateReadPage = {
  status: 'fail',
  message:
    'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
}

module.exports.errDeleteIdNotfound = {
  status: 'fail',
  message: 'Buku gagal dihapus. Id tidak ditemukan',
}

module.exports.errUpdateIdNotFound = {
  status: 'fail',
  message: 'Gagal memperbarui buku. Id tidak ditemukan',
}
