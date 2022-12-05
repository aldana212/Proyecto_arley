const conexion = require('../data/bd')

class servi_User{
    Users_Admin(){
        try {
            return new Promise((resolve, reject) =>{
                conexion.query("SELECT * FROM usuario",(error, result) =>{
                    if(error){
                     reject(error)
                    }else{
                    resolve(result)
                    }              
                });   
            })
        } catch (error) {
            return error
        }
    }

    Users_AdminId(cedula){
        try {
            return new Promise((resolve, reject) =>{
                conexion.query('SELECT * FROM usuario WHERE cedula = ?', [cedula],(error, result) =>{
                    if(error){
                     reject("error")
                    }else{
                    resolve(result)
                    }              
                });   
            })
        } catch (error) {
            return error
        }  
    }

    CreateUsers(data){
        try{
            return new Promise((resolve, reject) =>{
                console.log(data);
                const {cedula,name, mail, contraseña} = data;
                conexion.query('SELECT * FROM usuario WHERE cedula = ?', [cedula], (err, userdata)=>{
                if(userdata.length > 0){
                reject('cedula ya almacenada');
                }else{
                conexion.query("INSERT INTO usuario(cedula, name,mail, contraseña) VALUES(?, ? ,? , ?)",[cedula,name, mail, contraseña])
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
        // console.log(data);
        try{
            return new Promise((resolve, reject) =>{
                const {cedula,name, mail, contraseña} = data;
                conexion.query('SELECT * FROM usuario WHERE cedula = ?', [cedula], (err, userdata)=>{
                if(userdata.length > 0){
                reject('cedula ya almacenada');
                }else{
                conexion.query("UPDATE usuario SET ? WHERE cedula = ?",[{cedula, name, mail, contraseña}, id])
                resolve("todo bien")
                }
                })  
            })
        }catch(error){
            return error
        }
    }

    DeleteUser(data){
        console.log("hola" + data);
        try {
            // const {cedula } = data
            return new Promise((resolve, reject) =>{
                conexion.query("DELETE FROM usuario WHERE cedula = ? ", [data], (err, result) =>{
                    if(result){
                        console.log(result);
                        resolve("eliminado");
                    }else{
                        reject("err");
                    }
            })
            })
        } catch (error) {
            
        }
    }

    
}

module.exports = servi_User;