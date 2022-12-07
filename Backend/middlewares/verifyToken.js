const conexion = require('../data/bd')
const jwt = require('jsonwebtoken')

const verifyToken = async(req, res, next) => {
    try {
        console.log("hola desde try");
        if(req.cookies.jwt){
            console.log("sdasdas " + req.cookies.jwt);
            const codificando = jwt.verify(token, 'password_super_secret')
            conexion.query('SELECT * FROM usuario WHERE mail = ?', [codificando.mail], (error, result) =>{
             if(!result){return next()}
               console.log(error);
             row = result[0]
             return next();
            })
            console.log(codificando);
        }else{
         res.status(500).json({
            status: "error de autenticacion"
         })
       }
       } catch (error) {
        console.log("error111")
       }
}


module.exports = { verifyToken };