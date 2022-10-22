const { movBancoModelo } = require("../dominios/mov_clientes.js");

//Solicitudes
//MostrarEstudiantes

const mostrar = async () => {
    const cliente = await movBancoModelo.find().sort({id:1});
    console.log(cliente);
}

//MostrarEstudiantes por Id

const mostrarxId = async (id) => {
    const cliente = await movBancoModelo.find({_id:id});
    console.log(cliente);
}

//Insertar

const crear = async() =>{
    const cliente = new movBancoModelo({
        _id : 2,
        nombre : 'Juliana Dominguez',
        no_cuenta: 1001,
        tipo_cuenta: "Corriente",
        sede: "Centro comercial Buenavista",
        retiros: 150000,
        consignaciones: 600000,
        banco: "Colpatria"
    })
    var resultado = cliente.save();
    await mostrar();
    console.log('Cliente agregado exitosamente!');
}

//Editar

const actualizar = async(id) => {
    await movBancoModelo.updateOne({_id:id},{
$set:{
    nombre: 'José',
    tipo_cuenta: "Corriente",
    consignaciones: 650000    
}
    }).then(()=> console.log('Documento actualizado exitosamente!'));
   
}

//Eliminar
const eliminar = async (id) => {
    await movBancoModelo.deleteOne({_id:id});
    console.log('Cliente con id '+ id + ' ha sido eleminado exitosamente!')
    await mostrar();
}

const clientesxCuenta = async () => {
    const consulta = await movBancoModelo.aggregate([{$group: {_id:`$tipo_cuenta`, Total: {$sum: 1}}}]);
    console.log(consulta);
    
}

const conRetxCuentaS = async () => {
    const consulta1 = await movBancoModelo.aggregate([{$group: {_id:`$tipo_cuenta`, Total: {$sum: `$consignaciones`}}}]);
    console.log("consignaciones:")
    console.log(consulta1);
    const consulta2 = await movBancoModelo.aggregate([{$group: {_id:`$tipo_cuenta`, Total: {$sum: `$retiros`}}}]);
    console.log("retiros:");
    console.log(consulta2);
}

const conRetxCuentaP = async () => {
    const consulta1 = await movBancoModelo.aggregate([{$group: {_id:`$tipo_cuenta`, Total: {$avg: `$consignaciones`}}}]);
    console.log("consignaciones:")
    console.log(consulta1);
    const consulta2 = await movBancoModelo.aggregate([{$group: {_id:`$tipo_cuenta`, Total: {$avg: `$retiros`}}}]);
    console.log("retiros:");
    console.log(consulta2);
}

const conRetxCuentaMax = async () => {
    const consulta1 = await movBancoModelo.aggregate([{$group: {_id:`$tipo_cuenta`, Total: {$max: `$consignaciones`}}}]);
    console.log("consignaciones:")
    console.log(consulta1);
    const consulta2 = await movBancoModelo.aggregate([{$group: {_id:`$tipo_cuenta`, Total: {$max: `$retiros`}}}]);
    console.log("retiros:");
    console.log(consulta2);
}

const conRetxCuentaMin = async () => {
    const consulta1 = await movBancoModelo.aggregate([{$group: {_id:`$tipo_cuenta`, Total: {$min: `$consignaciones`}}}]);
    console.log("consignaciones:")
    console.log(consulta1);
    const consulta2 = await movBancoModelo.aggregate([{$group: {_id:`$tipo_cuenta`, Total: {$min: `$retiros`}}}]);
    console.log("retiros:");
    console.log(consulta2);
}

const saldoxCuenta = async () => {
    const consulta1 = await movBancoModelo.aggregate([{$project: {_id:`$tipo_cuenta`, Total: {$subtract: [`$consignaciones`, `$retiros`]}}}]);
    console.log("Total:")
    console.log(consulta1);
    
}

const totalXBanco = async () => {
    const consulta1 = await movBancoModelo.aggregate([{$group: {_id:`$banco`, Total:  {$sum: `$consignaciones`}}}]);
    console.log("Total consignaciones:")
    console.log(consulta1);

    const consulta2 = await movBancoModelo.aggregate([{$group: {_id:`$banco`, Total:  {$sum: `$retiros`}}}]);
    console.log("Total retiros:")
    console.log(consulta2);
    
}


module.exports = {mostrar, mostrarxId,crear,actualizar,eliminar, clientesxCuenta, conRetxCuentaS, conRetxCuentaP, 
    conRetxCuentaMax, conRetxCuentaMin, saldoxCuenta, totalXBanco}