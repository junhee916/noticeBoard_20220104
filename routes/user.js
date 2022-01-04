const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/check_auth')
const userctrl = require('../dbos/userController')
// get users
router.get('/', checkAuth, userctrl.getAll)
// get user
router.get('/:userId', checkAuth, userctrl.get)
// signup
router.post('/signup', userctrl.signup)
// login
router.post('/login', userctrl.login)
// update user
router.post('/update/:userId', checkAuth, userctrl.update)
// delete users
router.post('/delete', checkAuth, userctrl.deleteAll)
// delete user
router.post('/delete/:userId', checkAuth, userctrl.delete)
module.exports = router