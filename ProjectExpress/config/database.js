//Base de datos/moongose
const mongoose = require('mongoose');

//acceder las credenciales de mi proyecto
require('dotenv').config({ path: 'config.env' });

//Conexion a mi base de datos
const conectar_DataBase = async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Base de datos conectada')
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports =  conectar_DataBase
