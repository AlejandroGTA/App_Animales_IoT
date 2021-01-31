const express = require('express');
const app = express();
const engine = require('ejs-mate');
const path = require('path');
var server = require('http').createServer(app);
const io = require('socket.io')(server);

const mongo = require('../src/DB/Conection/Conecction');
mongo();

app.set('views',path.join(__dirname,'views'));
app.engine('ejs',engine);
app.set('view engine','ejs');
app.use('/public',express.static(path.join(__dirname,'public')));
app.use(express.json());

app.use('/', require('../src/route/Home/Home'));

const port = process.env.port || 3000;
// process.env.PORT, '0.0.0.0'
server.listen(process.env.PORT, '0.0.0.0', function (){
    console.log("Started");
});

io.on('connection', (socket) => {
    console.log('a user connected');
});