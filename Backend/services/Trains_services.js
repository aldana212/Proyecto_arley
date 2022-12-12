const conexion = require('../data/bd')


class servi_trains {
    async trains_users() {
        try {
            return new Promise((resolve, reject) => {
                conexion.query("SELECT * FROM trenes", (error, result) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(result)
                    }
                });
                // conexion.query("SELECT * FROM trenes",(error, result) =>{
                //     if(error){
                //      reject(error)
                //     }else{
                //     resolve(result)
                //     }              
                // });   
            })
        } catch (error) {
            return error
        }
    }

    CreateTrains(data) {
        try {
            return new Promise((resolve, reject) => {
                const { aforo, hora, destino, estado, numero_tren, origen, precio} = data;
                conexion.query('INSERT INTO trenes(aforo,hora_salidad, origen, destino,estado, precio, numero_tren) VALUES(?,?,?,?,?,?,?)', [aforo, hora, origen, destino, estado, precio, numero_tren], (err, result) => {
                    if (err) {
                        reject("err")
                    } else {
                        resolve("todo bien")
                    }
                })
            })
        } catch (error) {
            return error
        }
    }

    CreateReservas(data){
        const { cupos, cedula, codigo } = data
        return new Promise((resolve, reject) =>{
            conexion.query("INSERT INTO reservas(cupos, cedula2, codigo_servicio2) values(?, ?, ?)", [cupos, cedula, codigo], (err, result) =>{
                if(err){return reject(err)}
                resolve("Su reserva fue exitosamente")
            })
        })
    }

    PutTrain(data, id) {
        try {
            return new Promise((resolve, reject) => {
                // const {aforo, cupos, destino, estado,numero_tren, origen} = data;
                const { aforo, hora_salidad, destino, estado, numero_tren, origen, precio } = data;
                conexion.query("UPDATE trenes SET ? WHERE codigo_servicio = ?", [{ aforo,hora_salidad, origen, destino, precio, estado, numero_tren }, id], (err, result) => {
                    if (err) {
                        return reject(err)
                    } else {
                        resolve("Actualizacion correcta")
                    }
                })
            })
        } catch (error) {
            console.log(error);
        }
    }

    deleteTrain(id) {
        try {
            return new Promise((resolve, reject) => {
                conexion.query("DELETE FROM trenes WHERE codigo_servicio = ? ", [id], (err, result) => {
                    if (result) {
                        resolve("eliminado");
                    } else {
                        reject("err");
                    }
                })
            })
        }catch (error) {
         console.log(err);   
        }
    }
}

module.exports = servi_trains