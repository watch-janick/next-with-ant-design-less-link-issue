const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes
  .add('home', '/', 'home')
  .add('user-login', '/login', 'login')
  .add('user-register', '/register', 'register')
