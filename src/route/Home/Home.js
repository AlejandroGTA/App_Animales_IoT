const express = require('express');
const app = express();
// const mongo = require('mongoose');
const Placa = require('../../DB/Schemas/Data');
const route = express.Router();

route.get('/', async(req, res)=>{
   res.send("pagina inicio");
});

route.post('/Add', async(req, res)=>{
    const {Id, Button, Compuerta, Horas, Minutos, Dias, Cantidad} = req.body;
    // console.log(Button);
    let PlacaModel = new Placa();
    PlacaModel.Id = Id;
    PlacaModel.Button = Button;
    PlacaModel.Compuerta = Compuerta;
    PlacaModel.Horas = Horas;
    PlacaModel.Minutos = Minutos;
    PlacaModel.Dias = Dias;
    PlacaModel.Cantidad = Cantidad;
    await PlacaModel.save();
    res.json(PlacaModel);
});

route.post('/Button', async(req, res)=>{
    const {Id, Button} = req.body;
    let placa = await Placa.findOneAndUpdate(
        {
            Id:Id
        },
        {
            Button:Button
        });
    res.json(placa);
});

module.exports = route;