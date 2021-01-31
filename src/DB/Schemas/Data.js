
const mongoose = require('mongoose');
const { Schema } = mongoose;

const DataSchema = new mongoose.Schema({
    Id:String,
    Button:Boolean,
    Compuerta:Boolean,
    Horas:Number,
    Minutos:Number,
    Dias:Number,
    Cantidad:Number
});

module.exports = DataModel = mongoose.model('DataModel', DataSchema);