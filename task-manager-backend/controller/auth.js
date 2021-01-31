const bcrypt = require('bcryptjs');
const Users = require('../models/Users')
const jwt = require('jsonwebtoken')
const {secret} = require('../config')


const generateAccessToken = (id, email) => {
    const payload = {
        userId: id,
        email: email
    }
    return jwt.sign(payload, secret, {expiresIn: "1h"})
}

class authController {
    async registration(req, res) {
        try {
            const {username, email, password} = req.body;
            const candidate = await Users.findOne({email})
            if (candidate) {
                return res.json({message: 'User is email', code: 1})
            }
            Users.nextCount(async (err, count) => {
                if (err) {
                    console.log(err + " " + count)
                    res.status(400).json({message: 'Identity error'})
                }
                const hashPassword = bcrypt.hashSync(password, 10);
                const user = new Users({username, email, password: hashPassword})
                await user.save();
            })
            return res.json(true)
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Registration error'})
        }
    }

    async login(req, res) {
        try {
            const {email, password} = req.body
            const user = await Users.findOne({email})
            if(!user) {
                return res.json({message: 'Email error', code: 2})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if(!validPassword) {
                return res.json({message: 'Password error', code: 2 })
            }
            const token = generateAccessToken(user.userId, user.email);
            return res.json({token})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Login error'})
        }
    }

    async getUser(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1]
            const userId = jwt.verify(token, secret).userId;
            const userData = await Users.findOne({userId: userId}, 'username email img isActivation dateReg')
            return res.json(userData);
        } catch (e) {
            console.log(e)
            return res.json(e)
        }
    }
}

module.exports = new authController()