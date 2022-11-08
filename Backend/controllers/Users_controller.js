const servi_User = require('../services/users_sevices.js');
const services = new servi_User();
const auth_servi = require('../services/authService.js')
const auth = new auth_servi();
const Joi = require('@hapi/joi');

const validateRegister = Joi.object({
    cedula: Joi.number().min(4).max(100).integer().required(),
    name: Joi.string().min(3).max(255).required(),
    mail: Joi.string().min(3).max(255).required().email(),
    contraseña: Joi.string().min(3).max(255).required(),
})

class UserController{

    async UserRegistre(req, res){
            //validate data user
    const { error  } = validateRegister.validate(req.body)
    if(error) {
        console.log("aaa " + error.details[0].message)
        return res.status(400).json( 
            {error: error.details[0].message}
        )
    }
    try {
        const data = req.body;
        const agregar = auth.Users_register(data);
        agregar.then((responde) =>{
          res.status(201).send({ status: "OK", data: responde});
        }).catch((error) =>{
            res.status(500).send({ status: "FAILDED", data: error});
        })
    }catch (error) {
        console.log("error..")
    }
    }
    
    
    UserLogin = (req, res) =>{
     
    }
}


module.exports = UserController;