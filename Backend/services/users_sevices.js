const conexion = require('../data/bd')

class servi_User{
    Users_Admin(){
        try {
            return new Promise((resolve, reject) =>{
                conexion.query("SELECT * FROM usuario",(error, result) =>{
                    if(error){
                     reject(error)
                    }
                 
                    resolve(result)
                });   
            })
        } catch (error) {
            return error
        }
    }

    CreateUsers(data){
        try{
            return new Promise((resolve, reject) =>{
                const {cedula,name, mail, phone, contraseña} = data;
                conexion.query('SELECT * FROM usuario WHERE cedula = ?', [cedula], (err, userdata)=>{
                if(userdata.length > 0){
                reject('cedula ya almacenada');
                }else{
                conexion.query("INSERT INTO usuario(cedula, name,mail, phone, contraseña) VALUES(?, ? ,? ,?,?)",[cedula,name, mail, phone, contraseña])
                resolve("todo bien")
                }
                })  
            })
        }catch(error){
            return error
        }
    }

    updateUser(cedula){
        try{
            return new Promise((resolve, reject) =>{
                conexion.query('SELECT * FROM usuario WHERE cedula = ?', [cedula], (err, result)=>{
                if(err){
                reject(err)
                }else{
                resolve(result)
                }
                })  
            })
        }catch(error){
            return error
        }
    }

    updateUsers(data, id){
        try{
            return new Promise((resolve, reject) =>{
                const {cedula,name, mail, phone, contraseña} = data;
                conexion.query('SELECT * FROM usuario WHERE cedula = ?', [cedula], (err, userdata)=>{
                if(userdata.length > 0){
                reject('cedula ya almacenada');
                }else{
                conexion.query("UPDATE usuario SET ? WHERE cedula = ?",[{name, mail, phone, contraseña}, id])
                resolve("todo bien")
                }
                })  
            })
        }catch(error){
            return error
        }
    }

    DeleteUser(cedula){
        try {
            return new Promise((resolve, reject) =>{
                conexion.query("DELETE FROM usuario WHERE cedula = ?", [cedula], (err, result) =>{
                    if(err){
                        reject(error);
                    }else{
                        resolve("eliminado");
                    }
            })
            })
        } catch (error) {
            
        }
    }

    
}

module.exports = servi_User;