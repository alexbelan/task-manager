const Router = require('express');
const passport = require('passport')
const controller = require('../controller/auth');
const router = new Router()

router.post('/registration', controller.registration);
router.post('/login', controller.login);
router.get('/user', passport.authenticate('jwt', {session: false}), controller.getUser);

module.exports = router