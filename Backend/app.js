const express = require('express'); // requerimos a express
const app = express();
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser');
require('dotenv').config({path: '../env/.env'});
// const router  = require('./router/router_Users.js');
const router  = require('./router/index');


// doenv.config({path: '../env/.env'})

//configuracion de el modulo body-parser
app.use(bodyParser.urlencoded({
    extends:true
}));
app.use(bodyParser.json());  

app.use(cors());

//// import the router
app.use('/', router);


app.use(express.static(path.join(__dirname, '/public')))



const PORT = 3009;

app.listen(PORT, () =>{
    console.log('listening on port '+ PORT);
})