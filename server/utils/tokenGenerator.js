const jwt = require('jsonwebtoken')

const generateToken = (id) => {
  return jwt.sign({ id }, 'randomString', {
    expiresIn: '30d',
  })
}

module.exports = generateToken
