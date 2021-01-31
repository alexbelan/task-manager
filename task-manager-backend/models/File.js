const {Schema, model, connection} = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(connection)

const File = new Schema({
    fileId: {type: Number, unique: true},
    user: {type: Number, ref: 'Users'},
    name: {type: String, maxlength: 50, required: true},
    list: [{type: Number, ref: 'List'}]
})

File.plugin(autoIncrement.plugin, {model: 'File', field: "fileId"})

module.exports = model('File', File);