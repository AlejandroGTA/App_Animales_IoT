const express = require('express');
const app = express();
const engine = require('ejs-mate');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
var server = http.Server(app);
const io = require('socket.io')(server);

const mongo = require('../src/DB/Conection/Conecction');
mongo();

app.set('views',path.join(__dirname,'views'));
app.engine('ejs',engine);
app.set('view engine','ejs');
app.use('/public',express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended : true }))
app.use('/', require('../src/route/Home/Home'));

const port = process.env.PORT || 3000;
// process.env.PORT, '0.0.0.0'
server.listen(port, '0.0.0.0', function (){
    console.log("Started " + port);
});

require('../src/public/datos');

io.on('connection', (socket) => {
    console.log('a user connected');
    if(global.Button == 1){
        socket.emit('GetButton', global.Button);
        global.Button = 0;
    }

});

function RevisarDatos(){
    if(global.Button == 1){
        io.emit('GetButton', global.Button);
        global.Button = 0;
    }
    if(global.Compuerta == 1){
        io.emit('GetCompuerta', global.Compuerta);
        global.Compuerta = 0;
    }
    if(global.Horas == 1){
        io.emit('GetHoras', global.Horas);
        global.Horas = 0;
    }
    if(global.Minutos == 1){
        io.emit('GetMinutos', global.Minutos);
        global.Minutos = 0;
    }
    if(global.Dias == 1){
        io.emit('GetDias', global.Dias);
        global.Dias = 0;
    }
    if(global.Cantidad == 1){
        io.emit('GetCantidad', global.Cantidad);
        global.Cantidad = 0;
    }
}

setInterval(RevisarDatos, 500);
