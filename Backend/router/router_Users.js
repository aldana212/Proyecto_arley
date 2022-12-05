const express = require('express');
const router = express.Router();
const UserController = require('../controllers/Users_controller');
const controller = new UserController;


router.post('/register', controller.UserRegistre);
router.post('/login', controller.UserLogin);
router.post('/CreateUsers', controller.PostUsers);
router.get('/Users', controller.GetUsers)
router.get('/:cedula', controller.GetUserId)
router.delete('/:cedula', controller.DeleteUsers)
router.put("/:cedula" , controller.PutUsers)

module.exports = router;