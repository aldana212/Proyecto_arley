const express = require('express');
const router = express.Router();
const TrainController = require('../controllers/Trains_controller');
const controller = new TrainController();



router.get('/GetTrains', controller.GetTrains)
router.post('/PostTrains', controller.CreateTrains)
router.post('/PostReserva', controller.CreateReserva)
router.put('/:codigo', controller.PutTrai)
router.delete('/:codigo', controller.deleteTrain)

module.exports = router
