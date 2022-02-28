//console.log('hola mundo')

//Nos traera todo los servicios de express y la interaccion
const express = require('express');
const conectar_DataBase = require('./config/database');
const cors = require('cors')

//Implementamos el servicio
const app = express();
conectar_DataBase();
app.use(cors());

//Recibira en formato JSON
app.use(express.json());

//app.use('/api/bookshop', require('./routes/bookshop'));
app.use('/api', require('./routes/api'));


app.listen(3001, () => {
    console.log('El servidor se esta ejecutando en el puerto 3001')
})

//Creamos el servidor