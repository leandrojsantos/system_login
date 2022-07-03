const router = require('express').Router()
const UserController = require('./controller/UserController')

router.post('/login', UserController.login)
router.post('/create', UserController.create)

module.exports = router