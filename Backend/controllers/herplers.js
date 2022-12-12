const bcrypt = require('bcryptjs')
const { sign } = require("jsonwebtoken");



async function encryptPass(contraseña) {
    const hash = await bcrypt.hash(contraseña, 10)
    return hash
}

async function matchPass(contraseña, saveContraseña) {
    return await bcrypt.compare(contraseña, saveContraseña)
}

async function CreateToken(cedula1, name, mail,url_image){
    const token = sign(
        {
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
            cedula: cedula1, mail: mail , name: name, url_image: url_image
        }, "password_super_secret"
        )
    return token;
  }

module.exports = {
    encryptPass,
    matchPass,
    CreateToken
}