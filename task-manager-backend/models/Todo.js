const {Schema, model, connection} = require('mongoose');
const autoIncrement = require('mongoose-auto-increment')

autoIncrement.initialize(connection)

const Todo = new Schema({
    todoId: {type: Number, unique: true},
    list: {type: Number, ref: 'List'},
    user: {type: Number, ref: 'Users'},
    title: {type: String, maxlength: 100, required: true},
    description: {type: String, maxlength: 200, default: "", required: true},
    ready: {type: Boolean, default: false},
    date: {type: String, default: ""},
    time: {type: String, default: ""},
    deysWeek: {type: Array, default: void 0},
    users: {type: Array, default: void 0, ref: 'Users'},
})

Todo.plugin(autoIncrement.plugin, {model: 'Todo', field: 'todoId'})

module.exports = model('Todo', Todo);