const {Schema, model} = require('mongoose');

const File = new Schema({
    id: {type: Number, index: {unique: true}},
    user: {type: Schema.Types.ObjectId, ref: 'Users'},
    name: {type: String, maxlength: 50, required: true}
})

module.exports = model('Users', Users)