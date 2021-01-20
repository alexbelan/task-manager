const jwt = require('jsonwebtoken')
const {secret} = require('../config')


class JWTAuth {
    generateAccessToken = (id, email) => {
        const payload = {
            userId: id,
            email: email
        }
        return jwt.sign(payload, secret, {expiresIn: "5m"})
    }

}

module.exports = JWTAuth