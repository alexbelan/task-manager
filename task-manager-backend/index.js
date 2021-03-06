const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./config');
const auth = require('./routers/auth')
const todo = require('./routers/todo')
const list = require('./routers/list')
const file = require('./routers/file')

const PORT = process.env.PORT || 3000;

const app = express()

app.use(express.json());
app.use(cors());
app.use('/auth', auth);
app.use('/todo', todo);
app.use('/list', list);
app.use('/file', file);
app.use(passport.initialize())
require('./middleware/authJwtMiddleware')(passport)

async function start() {
    try {
        // const sittingConect = `mongodb+srv://${config.userdb}:${config.passwordb}@cluster0.mnin2.mongodb.net/${config.namedb}`;
        const sittingConect = `mongodb://localhost:27017/todo`;
        await mongoose.connect(sittingConect, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        app.listen(PORT, () => {
            console.log('Server has been started port: ' + PORT)
        })
    } catch(e) {
        console.log(e)
    }
}

start()


