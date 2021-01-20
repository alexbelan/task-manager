const Router = require('express')
const router = new Router()

router.get('/test', (req, res) => {
    try {
        res.status(200).json({message: "Всё работает"})
    } catch(e) {
        res.status(400).json({error: e, message: "Нечего не работает"})
    }
})

module.exports = router