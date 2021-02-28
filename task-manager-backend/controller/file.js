const jwt = require('jsonwebtoken')
const { secret } = require('../config');
const Files = require('../models/File');
const List = require('../models/List');
const Todo = require('../models/Todo');

const daleteList = async (listId) => {
    const list = await List.findOne({'listId': listId}, "todo")
    await Todo.deleteMany({todoId: {$in: list.todo}})
    await List.findOneAndDelete({listId: listId})
}

const getList = async (files) => {
    files.map(async (obj, index) => {
        if(obj.list !== 0) {
            files[index].list = await List.find({listId: {$in: obj.list}}, 'name listId file')
        }
    });
    console.log(files)
    return files
} 

class fileController {
    async addFile(req, res) {
        try {
            const {name} = req.body;
            const token = req.headers.authorization.split(' ')[1]
            const userId = jwt.verify(token, secret).userId;
            Files.nextCount(async (err, count) => {
                if (err) {
                    console.log(err + " " + count)
                    return res.status(400).json({message: 'Identity error'})
                }
                const file = new Files({name: name, user: userId})
                await file.save()
                return res.json(file)
            })
        } catch(e) {
            console.log(e)
            return res.status(400).json({message: 'Add File error'})
        }
    }

    async deleteFile(req, res) {
        try {
            const {fileId, deleteList} = req.body;
            const token = req.headers.authorization.split(' ')[1]
            const userId = jwt.verify(token, secret).userId;
            const file = await Files.findOne({fileId: fileId, user: userId}, "list")
            console.log(file.list)
            if (file.list.length !== 0) {
                for (let i = 0; i < file.list.length; ++i) {
                    if (deleteList === false) {
                        await List.findOneAndUpdate({listId: file.list[i]}, {file: -1})
                    } else {
                        daleteList(file.list[i])
                    }
                }
            }
            const resDelete = await Files.findOneAndDelete({fileId: fileId, user: userId})
            return res.json(resDelete)
        } catch(e) {
            console.log(e)
            return res.status(400).json({message: 'Delete File error'})
        }
    }

    async getFile(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1]
            const userId = jwt.verify(token, secret).userId;
            const file = await Files.find({user: userId}, 'list name fileId');
            return res.json(file)
        } catch(e) {
            console.log(e)
            return res.status(400).json({message: 'Get File error'})
        }
    }

    async editFile(req, res) {
        try {
            const {fileId, name} = req.body;
            const token = req.headers.authorization.split(' ')[1]
            const userId = jwt.verify(token, secret).userId;
            await Files.updateOne({fileId: fileId, user: userId}, {name: name})
            const file = await Files.findOne({fileId: fileId, user: userId})
            if (file !== null) {
                return res.json(file)
            } else {
                return res.json({message: 'Edit File null error', result: false})
            }
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: 'Edit File error'})
        }
    }
}


module.exports = new fileController()