const bcrypt = require('bcryptjs')
const { sign } = require("jsonwebtoken");



async function encryptPass(contraseña) {
    const hash = await bcrypt.hash(contraseña, 10)
    return hash
}

async function matchPass(contraseña, saveContraseña) {
    return await bcrypt.compare(contraseña, saveContraseña)
}

async function CreateToken(name, mail){
    console.log(name);
    console.log(mail); 
    const token = sign(
        {
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
            name: name, mail: mail
        }, "password_super_secret"
        )
    
    console.log(token);

    return token;
  }





module.exports = {
    encryptPass,
    matchPass,
    CreateToken
}