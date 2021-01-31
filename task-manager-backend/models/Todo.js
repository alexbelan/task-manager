const {Schema, model, connection} = require('mongoose');
const autoIncrement = require('mongoose-auto-increment')

autoIncrement.initialize(connection)

const Todo = new Schema({
    todoId: {type: Number, unique: true},
    list: {type: Number, ref: 'List'},
    user: {type: Number, ref: 'Users'},
    title: {type: String, maxlength: 100, required: true},
    // description: {type: String, maxlength: 200, required: true},
    ready: {type: Boolean, default: false},
    // date_ready: {type: Date, default: new Date(0)}
    // replays: {}
})

Todo.plugin(autoIncrement.plugin, {model: 'Todo', field: 'todoId'})

module.exports = model('Todo', Todo);