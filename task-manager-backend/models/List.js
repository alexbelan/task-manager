const {Schema, model, connection} = require('mongoose');
const autoIncrement = require('mongoose-auto-increment')

autoIncrement.initialize(connection)

const List = new Schema({
    listId: {type: Number, unique: true},
    file: {type: Number, default: -1, ref: 'File'},
    user: {type: Number, ref: 'Users'},
    name: {type: String, maxlength: 50, required: true},
    todo: [{type: Number, ref: 'Todo'}],
    description: {type: String, maxlength: 200, default: ""},
    users: {type: Array, default: void 0, ref: 'Users'}
})

List.plugin(autoIncrement.plugin, {model: 'List', field: 'listId'})

module.exports = model('List', List);