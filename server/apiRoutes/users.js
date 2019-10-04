const router = require('express').Router()

router.get('/', (req, res, next) => {
    try {
        res.send('no users yet')
    } catch (error) {
        next(error)
    }
})