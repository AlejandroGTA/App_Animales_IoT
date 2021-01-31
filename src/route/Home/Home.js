const express = require('express');
const app = express();
const Placa = require('../../DB/Schemas/Data');
const route = express.Router();

route.get('/', async(req, res)=>{
   res.render('index');
});

route.post('/Add', async(req, res)=>{
    const {Id, Button, Compuerta, Horas, Minutos, Dias, Cantidad} = req.body;
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

route.post('/Edit', async(req, res)=>{
    const {Id, Button, Compuerta, Horas, Minutos, Dias, Cantidad} = req.body;

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

route.post('/Compuerta', async(req, res)=>{
    const {Id, Compuerta} = req.body;
    let placa = await Placa.findOneAndUpdate(
        {
            Id:Id
        },
        {
            Compuerta:Compuerta
        });

    res.json(placa);
});

route.post('/Dias', async(req, res)=>{
    const {Id, Dias} = req.body;
    let placa = await Placa.findOneAndUpdate(
        {
            Id:Id
        },
        {
            Dias:Dias
        });

    res.json(placa);
});

route.post('/Horas', async(req, res)=>{
    const {Id, Horas} = req.body;
    let placa = await Placa.findOneAndUpdate(
        {
            Id:Id
        },
        {
            Horas:Horas
        });

    res.json(placa);
});

route.post('/Minutos', async(req, res)=>{
    const {Id, Minutos} = req.body;
    let placa = await Placa.findOneAndUpdate(
        {
            Id:Id
        },
        {
            Minutos:Minutos
        });

    res.json(placa);
});

route.post('/Cantidad', async(req, res)=>{
    const {Id, Cantidad} = req.body;
    let placa = await Placa.findOneAndUpdate(
        {
            Id:Id
        },
        {
            Cantidad:Cantidad
        });

    res.json(placa);
});


module.exports = route;