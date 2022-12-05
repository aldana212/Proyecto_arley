const bcrypt = require('bcryptjs')


async function encryptPass(contraseña) {
    const hash = await bcrypt.hash(contraseña, 10)
    return hash
}

async function matchPass(contraseña, saveContraseña) {
    return await bcrypt.compare(contraseña, saveContraseña)
}



module.exports = {
    encryptPass,
    matchPass
}