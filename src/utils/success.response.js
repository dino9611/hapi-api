module.exports.responseSuccess = (h, message, data, code) => {
  const res = {
    status: 'success',
    message,
    data,
  };

  return h.response(res).code(code);
};

module.exports.responseSuccessNoMsg = (h, data, code) => {
  const res = {
    status: 'success',
    data,
  };

  return h.response(res).code(code);
};
