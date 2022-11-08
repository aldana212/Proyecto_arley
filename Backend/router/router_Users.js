const { request } = require('express');
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/Users_controller');
const controller = new UserController;


router.post('/register', controller.UserRegistre);


module.exports = router;