const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const profesionalSchema=Schema({
	nombre: String,
	profesion: String,
	diasOcupado: [Number],
	localidad: String
});
module.exports = mongoose.model('Profesionale', profesionalSchema);