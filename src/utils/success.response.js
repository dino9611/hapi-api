module.exports.responseSuccess = (h, message, data, code) => {
  const res = {
    status: 'success',
    message: message,
    data: data,
  }

  return h.response(res).code(code)
}

module.exports.responseSuccessNoMsg = (h, data, code) => {
  const res = {
    status: 'success',
    data: data,
  }

  return h.response(res).code(code)
}
