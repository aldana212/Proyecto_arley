const conexion = require('../data/bd')
const { encryptPass, matchPass, CreateToken } = require('../controllers/herplers');
const jwt = require('jsonwebtoken')
const cloudinary = require('../util/cloudinary')

class auth_Users {
    Users_register(data, image) {
        try {
            return new Promise(async (resolve, reject) => {
                const { cedula, name, mail, contraseña} = data;
                if(image){
                    const uploadRes = await cloudinary.uploader.upload(image,{
                        upload_preset: 'Online-trains31'
                    })
                    if(uploadRes){
                        const contraseña_hash = await encryptPass(contraseña)
                        const url_image = uploadRes.url
                        const cloudinaryId = uploadRes.public_id
                        conexion.query('SELECT * FROM usuario WHERE cedula = ?', [cedula], (err, userdata) => {
                            if (userdata.length > 0) {
                                console.log("cedula ya almacenada");
                                reject('cedula ya almacenada');
                            } else {
                                conexion.query("INSERT INTO usuario(cedula, name, mail, contraseña, url_image, CloudinaryId) VALUES(?, ? ,?, ?, ?, ?)",
                                [cedula, name, mail, contraseña_hash, url_image, cloudinaryId])
                                resolve("Te registraste correctamente")
                            }
                        })    
                    }
                }
            })
        } catch (error) {
            return error
        }
    }

    Users_Login(data) {
        try {
            return new Promise(async (resolve, reject) => {
                const { cedula, contraseña } = data;
                conexion.query('SELECT * FROM usuario WHERE cedula = ?', [cedula], async (err, results) => {
                    const user = results[0];
                    if (results.length == 0 || !(await matchPass(contraseña, user.contraseña))) {
                        reject("El correo o la Contraseña no coinciden!!")
                    } else {

                        const cedula1 = results[0].cedula
                        console.log(cedula);
                        const name1 = results[0].name
                        const mail1 = results[0].mail
                        const url_image = results[0].url_image
                        const token = await CreateToken(cedula1, name1, mail1 , url_image)
                        resolve({
                            message: "session",
                            token
                        })
                        return token;
                    }
                })
            })
        } catch (error) {
            return error
        }
    }
}

module.exports = auth_Users;