const Router = require('express')
const passport = require('passport')
const { addTodo, deleteTodo, readyTodo, editTodo } = require('../controller/todo')
const router = new Router()

router.post('/add', passport.authenticate('jwt', {session: false}), addTodo)
router.post('/delete', passport.authenticate('jwt', {session: false}), deleteTodo)
router.post('/ready', passport.authenticate('jwt', {session: false}), readyTodo)
router.post('/edit', passport.authenticate('jwt', {session: false}), editTodo)

module.exports = router