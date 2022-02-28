//libreria de moongose base de datos guardian de nuestra base de datos de Usuario login
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");

//Especificar el esqueleto o esquema de la base de datos
const LoginSchema = mongoose.Schema({
    usuario: {
        type: String,
        require: true
    },
    
    password: {
        type: String,
        require: true
    },

    fec_cre:{
        type: Date,
        //llenar automaticamente
        default: Date.now()
    }
});

LoginSchema.method.generateJWT = function() {
    return jwt.sign({
        _id: this._id,
        usuario: this.name,
        password: this.email
    }, "secretKey")
    
}
module.exports = mongoose.model('loginUser', LoginSchema )
