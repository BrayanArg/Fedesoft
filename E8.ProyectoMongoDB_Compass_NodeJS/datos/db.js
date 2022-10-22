const mongoose = require('mongoose')

const uri = 'mongodb://localhost:27017/CRUD_JS';

//Conexion a MongoDb Compass
mongoose.connect(uri, {
} ).then(()=> console.log('Connection successfully!'))
.catch((e)=> console.log('Error: '+ e));

module.exports = uri;