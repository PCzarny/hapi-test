const users = [{
  username: 'john',
  password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
  name: 'John Doe',
  id: '2133d32a'
}];

export async function validateSession (request, session) {
  const account = await users.find(
      (user) => (user.id === session.id)
  );

  if (!account) {

      return { valid: false };
  }

  return { valid: true, credentials: account };
}
