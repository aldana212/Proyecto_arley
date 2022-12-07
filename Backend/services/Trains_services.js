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
                const { aforo, cupos, destino, estado, numero_tren, origen } = data;
                conexion.query('INSERT INTO trenes(aforo,origen, destino,estado,numero_tren) VALUES(?,?,?,?,?)', [aforo, origen, destino, estado, numero_tren], (err, result) => {
                    if (err) {
                        reject("err")
                        console.log(err);
                    } else {
                        conexion.query("INSERT INTO reservas(cupos) VALUES(?)", [cupos])
                        console.log("result");
                        resolve("todo bien")
                    }
                })
            })
        } catch (error) {
            return error
        }
    }

    PutTrain(data, id) {
        try {
            return new Promise((resolve, reject) => {
                // const {aforo, cupos, destino, estado,numero_tren, origen} = data;
                const { aforo, destino, estado, numero_tren, origen } = data;
                conexion.query("UPDATE trenes SET ? WHERE codigo_servicio = ?", [{ aforo, origen, destino, estado, numero_tren }, id], (err, result) => {
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
                // console.log(id);
                conexion.query("DELETE FROM trenes WHERE codigo_servicio = ? ", [id], (err, result) => {
                    if (result) {
                        // console.log(result);
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