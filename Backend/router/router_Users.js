const express = require('express');
const router = express.Router();
const UserController = require('../controllers/Users_controller');
const controller = new UserController;
const {verifyToken} = require('../middlewares/verifyToken.js')




router.get('/Users', controller.GetUsers)
router.get('/Admin',  verifyToken)
router.get('/UserCard/:cedula', controller.UserCardTrain)
router.post('/register', controller.UserRegistre);
router.post('/login', controller.UserLogin);
router.post('/CreateUsers', controller.PostUsers);
router.delete('/:cedula', controller.DeleteUsers)
router.put("/:cedula" , controller.PutUsers)

module.exports = router;