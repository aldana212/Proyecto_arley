const conexion = require('../data/bd')
const { encryptPass, matchPass } = require('../controllers/herplers');
const cloudinary = require('../util/cloudinary')

class servi_User {
    Users_Admin() {
        try {
            return new Promise((resolve, reject) => {
                conexion.query("SELECT * FROM usuario", (error, result) => {
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

    Users_AdminId(cedula) {
        try {
            return new Promise((resolve, reject) => {
                conexion.query('SELECT * FROM usuario WHERE cedula = ?', [cedula], (error, result) => {
                    if (error) {
                        reject("error")
                    } else {
                        resolve(result)
                    }
                });
            })
        } catch (error) {
            return error
        }
    }

    CreateUsers(data) {
        try {
            return new Promise(async (resolve, reject) => {
                const { cedula, name, mail, contraseña } = data;
                const contraseña_hash = await encryptPass(contraseña)
                const nueva_data = { cedula, name, mail, contraseña: contraseña_hash }
                conexion.query('SELECT * FROM usuario WHERE cedula = ?', [nueva_data.cedula], (err, userdata) => {
                    if (userdata.length > 0) {
                        reject('cedula ya almacenada');
                    } else {
                        conexion.query("INSERT INTO usuario(cedula, name,mail, contraseña) VALUES(?, ? ,? , ?)",
                            [nueva_data.cedula, nueva_data.name, nueva_data.mail, nueva_data.contraseña])
                        resolve("Usuario Creado Correctamente")
                    }
                })
            })
        } catch (error) {
            return error
        }
    }

    updateUser(cedula) {
        try {
            return new Promise((resolve, reject) => {
                conexion.query('SELECT * FROM usuario WHERE cedula = ?', [cedula], (err, result) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result)
                    }
                })
            })
        } catch (error) {
            return error
        }
    }

    updateUsers(RowData, image, id) {
        try {
            return new Promise(async (resolve, reject) => {
                const { cedula, name, mail, contraseña } = RowData;
                conexion.query("SELECT * FROM usuario", async (err, result) => {
                    // Delete image from cloudinary
                    await cloudinary.uploader.destroy(result[0].CloudinaryId);
                    if (image) {
                        const uploadRes = await cloudinary.uploader.upload(image, {
                            upload_preset: 'Online-trains31'
                        })
                            const url_image = uploadRes.url
                            const cloudinaryId = uploadRes.public_id
                            conexion.query(`UPDATE usuario SET ? WHERE cedula = ?`, [{ cedula, name, mail, contraseña, url_image, cloudinaryId}, id], async (err, results) => {
                                if (err) {
                                    console.log(err);
                                    return reject("err")
                                }
                                resolve("Actualizacion correcta")
                            })
                    }else{
                        conexion.query(`UPDATE usuario SET ? WHERE cedula = ?`, [{ cedula, name, mail, contraseña}, id], async (err, results) => {
                            if (err) {
                                console.log(err);
                                return reject("err")
                            }
                            resolve("Actualizacion correcta")
                        })
                    }
                })

            })
        } catch (error) {
            return error
        }
    }

    DeleteUser(data) {
        try {
            // const {cedula } = data
            return new Promise((resolve, reject) => {
                conexion.query("DELETE FROM usuario WHERE cedula = ? ", [data], (err, result) => {
                    if (result) {
                        resolve("eliminado");
                    } else {
                        reject("err");
                    }
                })
            })
        } catch (error) {

        }
    }


}

module.exports = servi_User;