const express = require('express');
const router = express.Router()
const routerUsers = require('./router_Users')
const routerTrains = require('./router_Trains')


router.use('/user', routerUsers)
router.use('/Trains', routerTrains)


module.exports = router