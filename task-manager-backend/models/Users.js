const {Schema, model, connection} = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(connection)

const Users = new Schema({
    userId: {type: Number, unique: true},
    username: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    date: { type: Date, default: Date.now },
    isActivation: {type: Boolean, default: false},
    img: {type: String, default: ''}
})

Users.plugin(autoIncrement.plugin, {model: 'Users', field: 'userId'})

module.exports = model('Users', Users)