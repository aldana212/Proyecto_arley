const express = require('express'); // requerimos a express
const app = express();
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser');
require('dotenv').config({ path: '../env/.env' });
// const router  = require('./router/router_Users.js');
const router = require('./router/index');
const cookieParser = require('cookie-parser');


//configuracion de el modulo body-parser
app.use(bodyParser.urlencoded({
    extends: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/cookie', function (req, res) {
    res.cookie("cookie_nam", 'cookie_value').send('Cookie is set');
});

app.get('/1', function (req, res) {
    console.log("Cookies1111 :  ", req.cookies);
});


app.use(
    cors(
        {
            origin: ["http://localhost:3000"],
            methods: ["GET", "POST"],
            credentials: true,
        }
    )
);


//// import the router
app.use('/', router);


app.use(express.static(path.join(__dirname, '/public')))



const PORT = 3009;

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})