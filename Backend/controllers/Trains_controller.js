const servi_trains = require('../services/Trains_services')
const services = new servi_trains()

class TrainsController {
    async GetTrains(req, res){
        try {
      const show = services.trains_users()
            show.then((result) => {
                res.status(201).json({ status: 2001, result})
            }).catch((err) => {
                res.status(501).json({ status: 501, err})
            });
        } catch (error) {
            
        }

    }

    async CreateTrains(req, res){
        try {
        const data = req.body

      const show = services.CreateTrains(data)
            show.then((result) => {
                res.status(201).json({ status: 2001, result})
            }).catch((err) => {
                res.status(501).json({ status: 501, err})
            });
        } catch (error) {
            
        }

    }
}


module.exports = TrainsController