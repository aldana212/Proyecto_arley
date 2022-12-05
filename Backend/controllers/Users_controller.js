const servi_User = require('../services/users_sevices.js');
const services = new servi_User();
const auth_servi = require('../services/authService.js')
const auth = new auth_servi();
const Joi = require('@hapi/joi');

const validateRegister = Joi.object({
    cedula: Joi.number().max(10).required(),
    name: Joi.string().min(3).max(255).required(),
    mail: Joi.string().min(3).max(255).lowercase().required().email(),
    contraseña: Joi.string().min(3).max(255).required(),
})

const validateLogin = Joi.object({
    cedula: Joi.number().max(10).required(),
    contraseña: Joi.string().min(3).max(255).required(),
})

// const validateCreate = Joi.object({
//     cedula: Joi.number().max(10).required(),
//     name: Joi.string().min(3).max(255).required(),
//     mail: Joi.string().min(3).max(255).lowercase().required().email(),
//     contraseña: Joi.string().min(3).max(255).required(),
//     id_rol1: Joi.number().required(),
// })

class UserController{

    async GetUsers(req, res){
      try {
        const show =  services.Users_Admin()
        show.then(responde =>{
            console.log(responde);
            res.status(201).json({ status: "OK", data: responde});
          }).catch(error =>{
            console.log(error);
              res.status(500).json({ status: "FAILDED", data: error});
          })
      } catch (error) {
        console.log("error.." + error)
      }
    }

    async GetUserId(req, res){
        try {
            const cedula = req.params.cedula
            console.log(cedula);
            const show =  services.Users_AdminId(cedula)
            show.then(responde =>{
                console.log(responde);
                res.status(201).json({ status: "OK", data: responde});
              }).catch(error =>{
                console.log(error);
                  res.status(500).json({ status: "FAILDED", data: error});
              })
          } catch (error) {
            console.log("error.." + error)
          }   
    }
    UserLogin = (req, res) =>{
       const { error } = validateLogin.validate(req.body)
       if(error){
        return res.status(400).json( 
            {error: error.details[0].message}
        ) 
       }
       try {
        const data = req.body
        // console.log(data);
        const validar = auth.Users_Login(data)
        validar.then(responde =>{
            res.status(201).json({ status: 201, responde})
        }).catch(error =>{
            res.status(500).json({ status: 500, error})
        })
       } catch (error) {
        
       }
    }

    async UserRegistre(req, res){
            //validate data user
    const { error  } = validateRegister.validate(req.body)
    if(error) {
        return res.status(400).json( 
            {error: error.details[0].message}
        )
    }
    try {
        const data = req.body;
        const agregar = auth.Users_register(data);
        agregar.then((responde) =>{
          res.status(201).json({ status: "OK", responde});
        }).catch((error) =>{
            res.status(500).json({ status: "FAILDED", error});
        })
    }catch (error) {
        console.log("error..")
    }
    }

    async PostUsers(req, res){
        const { error  } = validateRegister.validate(req.body)
        if(error) {
            return res.status(400).json( 
                {error: error.details[0].message}
            )
        }
        try {
            const data = req.body;
            console.log(data);
            const agregar = services.CreateUsers(data);
            agregar.then((responde) =>{
              res.status(201).send({ status: "OK", responde});
            }).catch((error) =>{
                res.status(500).send({ status: "FAILDED", error});
            })
        }catch (error) {
            console.log("error..")
        }
     
    }

    async DeleteUsers(req, res){
    const data = req.params.cedula
    const remove = services.DeleteUser(data)
    remove.then(responde =>{
        res.status(200).json({ status: "ok", data: responde})
    }).catch(error =>{
        res.status(500).json({ status: "Failded", data: error})
    })
    }

    async PutUsers(req, res){
        const cedula = req.params.cedula
        console.log(cedula);
        const data = req.body

        const update = services.updateUsers(data, cedula)
        update.then(responde =>{
            res.status(200).json({ status:"ok", responde})
            console.log(responde);
        }).catch(error =>{
            res.status(500).json({ status:"failded", error})
        })

    }
    
}


module.exports = UserController;