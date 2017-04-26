'use strict'
let express=require('express');
let app=express();
let fs=require('fs');
let bodyParser=require('body-parser');
let handlebars=require('handlebars');
let mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/locatron/');
let Profesional=require('./modelos/profesional');

app.use(bodyParser.urlencoded({extended:true}));

//app.use('[rutaWeb]',app.static('[directorioLocal]'));
/*POST*/
app.post('/profesionales',function(req,res){
	let profesional = new Profesional(); 
	profesional.nombre = req.body.name; 
	profesional.profesion = req.body.profesion;
	profesional.diasOcupado = req.body.dias;
	profesional.localidad = req.body.loc;

	profesional.save(function(err, profesionalGuardado){
		if (err)
			res.status(500).send({message: 'Error al salvar el Profesional ${err}'});
		res.status(200).send({Profesional: profesionalGuardado});
	});
});
/*GET*/
app.post('/listado',function(req,res){
	let prof=req.body.profesion.value;
	Profesional.find({profesion:'"'+prof+'"'},function(err,profesionales){
		if (err)
			res.status(500).send({message: 'Error al recuperar los profesionales ${err}'});
		let sourceProf=fs.readFileSync("./vista/profesionales.hbs","utf8");
		let plantillaProf=handlebars.compile(sourceProf);
		res.status(200).send(plantillaProf({profesional:profesionales}));
	});
});
/*GET de INDEX*/
app.get('/locatron',function(req, res){
	Profesional.find({},function(err,profesiones){
		if(err)
			res.status(500).send({message:'Error al recuperar los datos de la base de datos.'});
		let sourceIndex=fs.readFileSync('./vista/index.hbs','utf8');
		let plantillaBuscador=handlebars.compile(sourceIndex);
		res.status(200).send(plantillaBuscador({profesiones:profesiones}));
	});
});
/*PUT*/
app.put('/profesiones/:nombre',function(req,res){
	let username=req.params.username;
	let update=req.body;
	Profesional.findByIdAndUpdate(nombre,update,function(err,profesionales){
		if(err)
			res.status(500).send({message: 'Error al modificar el profesional ${err}'});
		res.status(200).send({profesional: profesionales});
	});
});
/*DELETE*/
app.delete('/profesionales/:nombre',function(req,res){
	Usuario.findBy({nombre:nombre},function(err,profesionales){
		if (err)
			res.status(500).send({message: 'Error al recuperar los profesionales ${err}'});
		Profesional.remove(function(err){
			if(err)
				res.status(500).send({message:'Error al recuperar los profesionales ${err}'})
			res.status(200).send({message:'Profesional ${username} borrado'});
		});
	});
});

app.get('/favicon.ico', function(req, res) { 
	res.status(204);
});

app.listen('30000');

console.log("funcionando ");