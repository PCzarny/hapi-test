async function controller (request, h) {
  request.cookieAuth.clear();
  return h.redirect('/');
}

module.exports = controller;