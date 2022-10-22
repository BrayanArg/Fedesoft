const mongoose = require('mongoose');

//Creación de esquemas

const movBancoSchema = mongoose.Schema({
    _id: Number,
    nombre: String,
    no_cuenta: Number,
    tipo_cuenta: String,
    sede: String,
    retiros: Number,
    consignaciones: Number,
    banco: String
    }, {versionKey: false})
    
    //Crear el Modelo
    
    const movBancoModelo = mongoose.model('mov_clientes', movBancoSchema,"movimientos_bancarios");

    module.exports = {movBancoSchema, movBancoModelo}