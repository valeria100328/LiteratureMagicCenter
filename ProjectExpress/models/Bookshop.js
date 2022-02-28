//libreria de moongose base de datos guardian de nuestra base de datos
const mongoose = require('mongoose')

//Especificar el esqueleto o esquema de la base de datos
const BookshopSchema = mongoose.Schema({
    nombre_libro: {
        type: String,
        require: true
    },
    
    categoria: {
        type: String,
        require: true
    },
    autor: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },

    cantidad_unidad:{
        type:Number
    },
    precio: {
        type: Number,
        require: true
    },
    fec_cre:{
        type: Date,
        //llenar automaticamente
        default: Date.now()
    }
});

module.exports = mongoose.model('bookshop', BookshopSchema )