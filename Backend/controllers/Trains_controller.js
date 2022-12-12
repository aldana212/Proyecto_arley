const servi_trains = require('../services/Trains_services')
const services = new servi_trains()

class TrainsController {
    async GetTrains(req, res) {
        try {
            const show = services.trains_users()
            show.then((result) => {
                res.status(201).json({ status: 2001, result })
            }).catch((err) => {
                res.status(501).json({ status: 501, err })
            });
        } catch (error) {
            console.log("error..")
        }

    }

    async CreateTrains(req, res) {
        try {
            const data = req.body

            const show = services.CreateTrains(data)
            show.then((result) => {
                res.status(201).json({ status: 2001, result })
            }).catch((err) => {
                res.status(501).json({ status: 501, err })
            });
        } catch (error) {
            console.log("error..")
        }

    }

    async CreateReserva(req, res){
        try {
            const data = req.body;
            console.log(data);
            const Reserva = services.CreateReservas(data)
            Reserva.then(responde =>{
                res.status(200).json({ status:200, responde})
            }).catch(err =>{
                res.status(500).json({ status: 500, err})
            })   
        } catch (error) {
            console.log(error)
        }
    }

    async PutTrai(req, res) {
        try {
            const id = req.params.codigo
            const data = req.body
            const updateTrains = services.PutTrain(data, id)
            updateTrains.then(responde =>{
                res.status(200).json({ status:"ok", responde})
            }).catch(error =>{
                res.status(500).json({ status:"failded", error})
            })
        } catch (error) {
            console.log("error..")
        }
    }

    async deleteTrain(req, res){
        const id = req.params.codigo
        const deleteTra = services.deleteTrain(id)
        deleteTra.then(result =>{
            res.status(201).json({ status:201, result})
        }).catch(err =>{
            res.status(501).json({ status: 501, err})
        })

    }
}


module.exports = TrainsController