const conexion = require('../data/bd')
const jwt = require('jsonwebtoken')

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.jwt
    if (token) {
      jwt.verify(token, 'password_super_secret', (err, decoded) => {
        if (err) {
          res.status(500).json({
            status: false,
            message: "error de autenticacion"
          })
        } else {
          conexion.query('SELECT * FROM usuario WHERE mail = ?', [decoded.mail], (error, result) => {
            if (!result) {
              res.json({
                status: false,
                 message: "error de autenticacion"
              })
            } else {
              row = result[0]
              res.status(201).json({
                status: true,
                message: "autenticacion",
                data: row
              })
              next();
            }
          })
    }})
    }
  } catch (error) {
    console.log("!")
  }
}


module.exports = { verifyToken };