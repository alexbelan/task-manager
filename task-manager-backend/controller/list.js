const jwt = require('jsonwebtoken')
const { secret } = require('../config')
const List = require('../models/List')
const File = require('../models/File')
const Todo = require('../models/Todo')

class listController {
    async addList(req, res) {
        try {
            const {name} = req.body
            const file = (req.body.file && req.body.file >= 0) ? req.body.file : false
            const token = req.headers.authorization.split(' ')[1]
            const userId = jwt.verify(token, secret).userId;
            List.nextCount(async (err, count) => {
                if (err) {
                    console.log(err + " " + count)
                    return res.status(400).json({message: 'Identity error'})
                }
                let list
                if (file !== false) {
                    const listsFile = await File.findOne({fileId: file}, "list")
                    if (listsFile === null) {
                        return res.status(400).json({message: 'List error file'})
                    } else {
                        list = new List({name: name, user: userId, file: file})
                        await list.save()
                        await File.findOneAndUpdate({fileId: file}, {list: listsFile.list.concat([list.listId])})
                        return res.json(list)
                    }
                } else {
                    list = new List({name: name, user: userId})
                    await list.save()
                    return res.json(list)
                }
            })
        } catch(e) {
            console.log(e)
            return res.status(400).json({message: 'Add List error'})
        }
    }

    async deleteList(req, res) {
        try {
            const {listId} = req.body;
            const token = req.headers.authorization.split(' ')[1]
            const userId = jwt.verify(token, secret).userId;
            const list = await List.findOne({listId: listId, user: userId})
            if (list.file !== -1) {
                const fileData = await File.findOne({fileId: list.file, user: userId}, 'list')
                let pos = fileData.list.indexOf(listId)
                fileData.list.splice(pos, 1)
                await File.findOneAndUpdate({fileId: list.file, user: userId}, {list: fileData.list})
            }
            await Todo.deleteMany({todoId: {$in: list.todo}})
            await List.findOneAndDelete({listId: listId, user: userId})
            return res.json({result: "success"})
        } catch {
            return res.status(400).json({message: 'Delete List error'})
        }
    }

    async getLists(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1]
            const userId = jwt.verify(token, secret).userId;
            const lists = await List.find({user: userId}, "file name listId")   
            return res.json(lists)
        } catch(e) {
            return res.status(400).json({message: 'Get Lists error'})
        }
    }

    async editList(req, res) {
        try {
            const {listId, name} = req.body;
            const token = req.headers.authorization.split(' ')[1]
            const userId = jwt.verify(token, secret).userId;
            await List.updateOne({listId: listId, user: userId}, {name: name})
            const list = await List.findOne({listId: listId, user: userId}, "file name listId")
            if (list !== null) {
                return res.json(list)
            } else {
                return res.json({message: 'Edit List null error', result: false})
            }
        } catch(e) {
            console.log(e)
            return res.status(400).json({message: 'Edit List error'})
        }
    }
}

module.exports = new listController()