const servi_trains = require('../services/Trains_services')
const services = new servi_trains()
const Joi = require('@hapi/joi');

const validateTrenes = Joi.object({
    image: Joi.string(),
    hora: Joi.string().required(),
    aforo: Joi.string().required(),
    destino: Joi.string().required(),
    origen: Joi.string().required(),
    precio: Joi.number().required(),
    estado: Joi.string().required(),
    numero_tren: Joi.number().required(),
})

class TrainsController {
    async cardTrainsUsers(req, res) {
        try {
            const show = services.cardTrainsUser()
            show.then((result) => {
                res.status(201).json({ status: 2001, result })
            }).catch((err) => {
                res.status(501).json({ status: 501, err })
            });
        } catch (error) {
            console.log("error..")
        }

    }

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
        //validate data user
        const { values } = req.body
        const { error } = validateTrenes.validate(values)
        if (error) {
            return res.status(400).json(
                { error: error.details[0].message }
            )
        }
        try {
            const { values } = req.body
            const { image } = req.body
            const show = services.CreateTrains(values, image)
            show.then((result) => {
                res.status(201).json({ status: 2001, result })
            }).catch((err) => {
                res.status(501).json({ status: 501, err })
            });
        } catch (error) {
            console.log("error..")
        }

    }

    async CreateReserva(req, res) {
        try {
            const data = req.body;
            const Reserva = services.CreateReservas(data)
            Reserva.then(responde => {
                res.status(200).json({ status: 200, responde })
            }).catch(err => {
                res.status(500).json({ status: 500, err })
            })
        } catch (error) {
            console.log(error)
        }
    }

    async PutTrai(req, res) {
        try {
            const id = req.params.codigo
            const { RowData } = req.body
            const { image } = req.body
            const updateTrains = services.PutTrain(RowData, image, id)
            updateTrains.then(responde => {
                res.status(200).json({ status: "ok", responde })
            }).catch(error => {
                res.status(500).json({ status: "failded", error })
            })
        } catch (error) {
            console.log("error..")
        }
    }

    async deleteTrain(req, res) {
        const id = req.params.codigo
        const deleteTra = services.deleteTrain(id)
        deleteTra.then(result => {
            res.status(201).json({ status: 201, result })
        }).catch(err => {
            res.status(501).json({ status: 501, err })
        })

    }
}


module.exports = TrainsController