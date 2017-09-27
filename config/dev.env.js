var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://localhost:8056/Point_System"',
  APP_ORIGIN: '"http://ijiandan.cc"'
});
