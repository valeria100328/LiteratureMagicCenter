const express = require('express')
const router = express.Router()
//Va a models y le dice que traiga el ususario
const {Usuario} = require('../models/Login')

router.post('/', async(req, res)=>{
    let usuario = await Usuario.findOne({usuario: req.body.Usuario})
    if(user) return res.status(404).send('Ese usuario ya existe')
    usuario = new Usuario ({
        usuario: req.body.name,
        password: req.body.password
    })
    const  result = await user.save()
    const jwtToken = user.generateJWT();
    res.status(200).send({jwtToken})
})