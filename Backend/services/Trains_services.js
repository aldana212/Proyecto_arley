const conexion = require('../data/bd')


class servi_trains{
    async trains_users(){
        try {
            return new Promise((resolve, reject) =>{
                conexion.query("SELECT * FROM trenes",(error, result) =>{
                    if(error){
                     reject(error)
                    }else{
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
    CreateTrains(data){
        try{
            return new Promise((resolve, reject) =>{
                console.log(data);
                console.log("holaaaa");
                const {aforo, cupos, destino, estado, fecha_salidad,hora_salidad, numero_tren, origen} = data;
                conexion.query('INSERT INTO trenes(aforo,hora_salidad,origen,destino,estado,numero_tren) VALUES(?,?,?,?,?,?)', [aforo,hora_salidad,origen,destino,estado,numero_tren], (err, result)=>{
                if(err){
                    reject("err")
                    console.log(err);
                }else{
                conexion.query("INSERT INTO reservas(cupos, fecha_salidad) VALUES(?, ?)",[cupos, fecha_salidad])
                console.log(result);
                resolve("todo bien")
                }
                })  
            })
        }catch(error){
            return error
        }
    }
}

module.exports = servi_trains