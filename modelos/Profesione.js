const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProfesionSchema = Schema({
	nombre: String,
	versionKey: false
});
module.exports = mongoose.model('Profesione',ProfesionSchema)