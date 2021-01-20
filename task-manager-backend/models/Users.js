const {Schema, model} = require('mongoose');

const Users = new Schema({
    id: {type: Number, index: {unique: true}},
    username: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    date: { type: Date, default: Date.now },
    isActivation: {type: Boolean, default: false},
    img: {type: String, default: ''}
})

module.exports = model('Users', Users)