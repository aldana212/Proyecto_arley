const express = require('express');
const router = express.Router()
const routerUsers = require('./router_Users')


router.use('/user', routerUsers)


module.exports = router