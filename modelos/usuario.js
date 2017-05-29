const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UsuarioSchema = Schema({
	nombre: String,
	usuario: String,
	password: String
	/*citas:  [{
		profesional: String,
		profesion: String,
		dia: String,
		hora: String
	}]*/
});
module.exports = mongoose.model('Usuario', UsuarioSchema);