const jwt = require('jsonwebtoken')
const { secret } = require('../config')
const List = require('../models/List')
const Todo = require('../models/Todo')

class todoController {
    async addTodo(req, res) {
        try {
            const {title} = req.body;
            const list = (req.body.list && req.body.list >= 0) ? req.body.list : false
            const token = req.headers.authorization.split(' ')[1]
            const userId = jwt.verify(token, secret).userId;
            Todo.nextCount(async (err, count) => {
                if (err) {
                    console.log(err + " " + count)
                    return res.status(400).json({message: 'Identity error'})
                }
                if (list === false) {
                    return res.status(400).json({message: 'Todo error is not list'})
                } else {
                    const todoList = await List.findOne({listId: list}, "todo")
                    if (todoList === null) {
                        return res.status(400).json({message: 'Todo error is not list'})
                    } else {
                        const todo = new Todo({title: title, user: userId, list: list})
                        await todo.save()
                        await List.findOneAndUpdate({listId: list}, {todo: todoList.todo.concat([todo.todoId])})
                        return res.json(todo)
                    }
                }
            })
        } catch(e) {
            console.log(e)
            return res.status(400).json({message: 'Add Todo error'})
        }
    }

    async deleteTodo(req, res) {
        try {
            const {todoId} = req.body;
            const token = req.headers.authorization.split(' ')[1]
            const userId = jwt.verify(token, secret).userId;
            const todo = await Todo.findOne({todoId: todoId, user: userId})
            const listData = await List.findOne({listId: todo.list}, "todo");
            let pos = listData.todo.indexOf(todoId)
            listData.todo.splice(pos, 1)
            await List.findOneAndUpdate({listId: todo.list}, {todo: listData.todo})
            await Todo.findOneAndDelete({todoId: todoId, user: userId});
            return res.json({result: "success"})
        } catch(e) {
            console.log(e)
            return res.status(400).json({message: 'Delete Todo error'})
        }
    }

    async editTodo(req, res) {
        try {
            const {todoId, newTitle} = req.body;
            const token = req.headers.authorization.split(' ')[1]
            const userId = jwt.verify(token, secret).userId;
            const todo = await Todo.findOneAndUpdate({todoId: todoId, user: userId}, {title: newTitle})
            if (todo !== null) {
                return res.json({result: true})
            } else {
                return res.json({message: 'Edit todo null error', result: false})
            }
        } catch(e) {
            console.log(e)
            return res.status(400).json({message: 'Edit Todo error'})
        }
    }

    async readyTodo(req, res) {
        try {
            const {todoId} = req.body;
            const token = req.headers.authorization.split(' ')[1]
            const userId = jwt.verify(token, secret).userId;
            const todo = await Todo.findOne({todoId: todoId, user: userId}, "ready")
            const todoChange = await Todo.findOneAndUpdate({todoId: todoId, user: userId}, {ready: !todo.ready});
            if (todoChange !== null) {
                return res.json({message: 'Ready change', result: true})
            } else {
                return res.json({message: 'Ready Todo error'})
            }
        } catch(e) {
            console.log(e)
            return res.status(400).json({message: 'Ready Todo error'})
        }
    }
}

module.exports = new todoController()