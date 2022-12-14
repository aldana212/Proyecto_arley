const conexion = require('../data/bd')
const cloudinary = require('../util/cloudinary')

class servi_trains {

    async cardTrainsUser() {
        try {
            return new Promise((resolve, reject) => {
                conexion.query("SELECT * FROM trenes",
                    (error, result) => {
                        if (error) {
                            reject(error)
                        } else {
                            conexion.query("SELECT trenes.aforo - SUM(reservas.cupos)  as cantidad, codigo_servicio2 FROM trenes INNER JOIN reservas ON codigo_servicio = codigo_servicio2 GROUP BY codigo_servicio", (err, userdata) => {

                                resolve({
                                    result,
                                    userdata,
                                })
                            })
                        }
                    });
            })
        } catch (error) {
            return error
        }
    }

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
            })
        } catch (error) {
            return error
        }
    }

    async CreateTrains(values, image) {
        try {
            return new Promise(async (resolve, reject) => {
                const { aforo, hora, destino, estado, numero_tren, origen, precio } = values;
                if (image) {
                    const uploadRes = await cloudinary.uploader.upload(image, {
                        upload_preset: 'Online-trains31'
                    })
                    if (uploadRes) {
                        const url_image = uploadRes.url
                        const cloudinaryId = uploadRes.public_id
                        conexion.query('INSERT INTO trenes(aforo,hora_salidad, origen, destino, precio, url_image, CloudinaryId, estado, numero_tren) VALUES(?,?,?,?,?,?,?,?,?)',
                            [aforo, hora, origen, destino, precio, url_image, cloudinaryId, estado, numero_tren], (err, result) => {
                                if (err) {
                                    reject("err")
                                } else {
                                    resolve("haz creado un seccion de tren correcta")
                                }
                            })

                    }
                }
            })
        } catch (error) {
            return error
        }
    }

    async CreateReservas(data) {
        const { cupos, cedula, codigo } = data
        return new Promise((resolve, reject) => {
            // conexion.query("SELECT trenes.aforo, SUM(reservas.cupos) as cantidad FROM trenes INNER JOIN reservas ON codigo_servicio = codigo_servicio2 GROUP BY trenes.codigo_servicio HAVING SUM(reservas.cupos) < trenes.aforo<", (err, result) =>{
            conexion.query("SELECT trenes.aforo ,SUM(reservas.cupos) as cantidad FROM trenes INNER JOIN reservas ON codigo_servicio = codigo_servicio2 WHERE codigo_servicio2 = ?", [codigo], (err, results) => {
                results[0].cantidad = + 0;
                const suma = parseInt(cupos) + parseInt(results[0].cantidad);
                if (suma > results[0].aforo) {
                    reject("limite de cupos")
                } else {
                    conexion.query("INSERT INTO reservas(cupos, cedula2, codigo_servicio2) values(?, ?, ?)", [cupos, cedula, codigo], (err, result) => {
                        if (err) { return reject(err) }
                        resolve("Su reserva fue exitosamente")
                    })
                }
            })
        })
    }

    async PutTrain(RowData, image, id) {
        try {
            return new Promise((resolve, reject) => {
                const { aforo, hora_salidad, destino, estado, numero_tren, origen, precio } = RowData;
                conexion.query("SELECT * FROM trenes", async (err, result) => {
                    // Delete image from cloudinary
                    await cloudinary.uploader.destroy(result[0].CloudinaryId);
                    if (image) {
                        const uploadRes = await cloudinary.uploader.upload(image, {
                            upload_preset: 'Online-trains31'
                        })
                        const url_image = uploadRes.url
                        const cloudinaryId = uploadRes.public_id
                        conexion.query("UPDATE trenes SET ? WHERE codigo_servicio = ?",
                            [{ aforo, hora_salidad, origen, destino, precio, url_image, cloudinaryId, estado, numero_tren }, id], (err, result) => {
                                if (err) {
                                    return reject(err)
                                } else {
                                    resolve("Actualizacion correcta")
                                }
                            })
                    } else {
                        conexion.query("UPDATE trenes SET ? WHERE codigo_servicio = ?",
                            [{ aforo, hora_salidad, origen, destino, precio, estado, numero_tren }, id], (err, result) => {
                                if (err) {
                                    return reject(err)
                                } else {
                                    resolve("Actualizacion correcta")
                                }
                            })
                    }

                })
            })
        } catch (error) {
            console.log(error);
        }
    }

    async deleteTrain(id) {
        try {
            return new Promise((resolve, reject) => {
                conexion.query("DELETE FROM trenes WHERE codigo_servicio = ? ", [id], (err, result) => {
                    if (result) {
                        resolve("eliminado correctamente");
                    } else {
                        reject(err);
                    }
                })
            })
        } catch (error) {
            console.log(err);
        }
    }
}

module.exports = servi_trains