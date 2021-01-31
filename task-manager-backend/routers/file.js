const Router = require('express')
const passport = require('passport')
const { addFile, deleteFile, getFile, editFile } = require('../controller/file')
const router = new Router()

router.post('/add', passport.authenticate('jwt', {session: false}), addFile)
router.post('/delete', passport.authenticate('jwt', {session: false}), deleteFile)
router.get('/get', passport.authenticate('jwt', {session: false}), getFile)
router.post('/edit', passport.authenticate('jwt', {session: false}), editFile)

module.exports = router