const conexion = require('../data/bd')

class auth_Users{
    Users_register(data){
        try{
            return new Promise((resolve, reject) =>{
                const {cedula,name, mail, contraseña} = data;
                conexion.query('SELECT * FROM usuario WHERE cedula = ?', [cedula], (err, userdata)=>{
                if(userdata.length > 0){
                  reject('cedula ya almacenada');
                }else{
                conexion.query("INSERT INTO usuario(cedula, name, mail, contraseña) VALUES(?, ? ,?, ?)",[cedula,name, mail, contraseña])
                resolve("Te registraste correctamente")
                }
                })  
            })
        }catch(error){
            return error
        }
    }
}

module.exports = auth_Users;