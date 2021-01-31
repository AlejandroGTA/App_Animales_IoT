const MongoClient = require('mongoose');
const uri = "mongodb+srv://Ale_dbuser:Alex12345678@cluster0.sas3p.mongodb.net/Animales?retryWrites=true&w=majority";

const connectMongo = async () => {
   await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
   console.log("mogno conect");
}

module.exports = connectMongo;