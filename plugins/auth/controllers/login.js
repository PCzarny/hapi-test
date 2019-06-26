function controller (request, h) {
  return ` <html>
      <head>
          <title>Login page</title>
      </head>
      <body>
          <h3>Please Log In</h3>
          <form method="post" action="/signin">
              Username: <input type="text" name="username"><br>
              Password: <input type="password" name="password"><br/>
          <input type="submit" value="Login"></form>
      </body>
  </html>`;
}

module.exports = controller;