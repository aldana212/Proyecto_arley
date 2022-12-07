const conexion = require('../data/bd')
const { encryptPass, matchPass, CreateToken } = require('../controllers/herplers');
const jwt = require('jsonwebtoken')


class auth_Users {
    Users_register(data) {
        try {
            return new Promise(async (resolve, reject) => {
                const { cedula, name, mail, contraseña } = data;
                const contraseña_hash = await encryptPass(contraseña)
                const nueva_data = { cedula, name, mail, contraseña: contraseña_hash }
                conexion.query('SELECT * FROM usuario WHERE cedula = ?', [nueva_data.cedula], (err, userdata) => {
                    if (userdata.length > 0) {
                        reject('cedula ya almacenada');
                    } else {
                        conexion.query("INSERT INTO usuario(cedula, name, mail, contraseña) VALUES(?, ? ,?, ?)",
                            [nueva_data.cedula, nueva_data.name, nueva_data.mail, nueva_data.contraseña])
                        resolve("Te registraste correctamente")
                    }
                })
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

                        const name1 = results[0].name
                        const mail1 = results[0].mail
                        const token = await CreateToken(name1, mail1)
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