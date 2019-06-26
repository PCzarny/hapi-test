const Bcrypt = require('bcrypt');

const users = [{
  username: 'john',
  password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
  name: 'John Doe',
  id: '2133d32a'
}];

export default async function controller (request, h) {
  const { username, password } = request.payload;
  const account = users.find(
      (user) => user.username === username
  );

  if (!account || !(await Bcrypt.compare(password, account.password))) {
    return h.redirect('/');
  }

  request.cookieAuth.set({ id: account.id });
  return h.redirect('/dashboard');
}
