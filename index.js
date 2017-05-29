'use strict'
//importación de módulos
	const express = require('express');
	const app = express();
	app.set('port', (process.env.PORT || 5000));
	let fs = require('fs');
	let _ = require('lodash');
	//let handlebars = require('handlebars');
	const mongoose = require('mongoose');
	const Profesion = require ('./modelos/profesion');
	const Profesional = require ('./modelos/profesional');
	const Usuario = require ('./modelos/usuario');
	let bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({extended:false}));
	app.use(bodyParser.json());
	app.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		res.setHeader('Access-Control-Allow-Credentials', true);
		next();
	});
//

//conexion a la base de datos
//original= mongodb://Linksamaru:Lifesense42@ds123930.mlab.com:23930/locatron
//\x40
	mongoose.connect('mongodb://Linksamaru:Lifesense42\x40ds123930.mlab.com:23930/locatron');
	
//

//sincronizacion con paginas hbs
	let indexHtml = fs.readFileSync('./vista/index.hbs','utf-8');
	let adminProfHtml = fs.readFileSync('./vista/adminProfesiones.hbs','utf-8');
//

/*/templates
	let template = handlebars.compile(indexHtml);
	let templateAdminProfHtml = handlebars.compile(adminProfHtml);
//*/


//get
app.get('/locatron', function(req, res){
	Profesion.find({},function(err, profesiones){
		if(err){
			return res.status(500);
		}
		if(!profesiones){
			return res.status(404);
		}
		console.log("mas menos funciona");
		res.status(200).send({profesiones:profesiones});
	});
});
app.get('/profesionesAdmin', function(req, res){
	Profesion.find({},function(err, profesiones){
		if(err){
			return res.status(500);
		}
		if(!profesiones){
			return res.status(404);
		}
		res.status(200).send({profesiones:profesiones});
	});
});

app.get('/profesionalesAdmin/', function(req, res){
	Profesional.find({},function(err, profesionales){
		if(err){
			return res.status(500);
		}
		if(!profesionales){
			return res.status(404);
		}
		console.log(profesionales)
		res.status(200).json(profesionales);
	});
});

app.get('/usuariosAdmin/:usu', function(req, res){
		let usu = req.params.usu;
 		usu = usu.substr(1,usu.length);
		
		console.log(usu);
	Usuario.findOne({usuario:usu}, function(err, usuario){
		if(err){
			return res.status(500);
		}else{
			if(!usuario){
				return res.status(404);
			}
			res.status(200).json(usuario);
			console.log("un solo usuario "+usuario);
		}
	});
});

app.get('/usuariosAdmin', function(req, res){
	Usuario.find({},function(err, usuarios){
		if(err){
			return res.status(500);
		}
		if(!usuarios){
			return res.status(404);
		}
		res.status(200).send(usuarios);
		console.log("todos los usuarios");
	});
});


app.get('/locatronAdmin', function(req, res){
	Profesion.find({},function(err, profesiones){
		if(err){
			return res.status(500);
		}
		if(!profesiones){
			return res.status(404);
		}
		res.status(200).send({profesiones:profesiones});
	});
});

//post
	app.post('/profesionesAdmin',function(req,res){
 	console.log("input recibido");
 	let profesion = new Profesion();
 	profesion.nombre = req.body.nombre;

 	console.log(req.body.nombre);
 	profesion.save(function(err,profesionGuardada){
 		if(err){
 			res.status(500).send("error al insertar");
 		}
 		res.status(200).send({profesion:profesionGuardada});
 	});
});

	app.post('/profesionalesAdmin',function(req,res){
 	console.log("input recibido");
 	let profesion = new Profesional();
 	profesional.nombre = req.body.nombre;

 	console.log(req.body.nombre);
 	profesional.save(function(err,profesionalGuardado){
 		if(err){
 			res.status(500).send("error al insertar");
 		}
 		res.status(200).send({profesional:profesionalGuardado});
 	});
});

	app.post('/usuariosAdmin',function(req,res){
 	console.log("input recibido");
 	let usuario = new usuario();
 	usuario.nombre = req.body.nombre;

 	console.log(req.body.nombre);
 	usuario.save(function(err,usuarioGuardado){
 		if(err){
 			res.status(500).send("error al insertar");
 		}
 		res.status(200).send({usuario:usuarioGuardado});
 	});
});
//
//PUT
	app.put('/profesionesAdmin/:idProf',function(req,res){
 		

 		let id = req.params.idProf;
 		id = id.substr(1,id.length);
 		
 		Profesion.findById(id,function(error,profesion){
 			if(error){
 				return res.status(500).send('error al modificar los datos');
 			}
 			profesion.nombre = req.body.nombre;
 			profesion.save(profesion);
 			return res.status(200).send({profesion: profesion});
 		});
	});
	
	app.put('/profesionalesAdmin/:idProf',function(req,res){
 		

 		let id = req.params.idProf;
 		id = id.substr(1,id.length);
 		
 		Profesional.findById(id,function(error,profesional){
 			if(error){
 				return res.status(500).send('error al modificar los datos');
 			}
 			profesional.nombre = req.body.nombre;
 			profesional.save(profesional);
 			return res.status(200).send({profesional: profesional});
 		});
	});
	
	app.put('/usuariosAdmin/:idProf',function(req,res){
 		

 		let id = req.params.idProf;
 		id = id.substr(1,id.length);
 		
 		Usuario.findById(id,function(error,usuario){
 			if(error){
 				return res.status(500).send('error al modificar los datos');
 			}
 			usuario.nombre = req.body.nombre;
 			usuario.save(usuario);
 			return res.status(200).send({usuario: usuario});
 		});
	});

//
//DELETE
	app.delete('/profesionesAdmin/:idProf',function(req,res){
		let id = req.params.idProf;
		id=id.substr(1,id.length);
 	Profesion.findById(id,function(err,profesionDeleted){
 		if(err){
 			return res.status(500).send('error del servidor');
 		}
 		if(!profesionDeleted){
 			return res.status(404).send('no se encontro la profesion');
 		}
 		profesionDeleted.remove(function(err){
 			if(err){
 				return res.status(500).send('error al borrar');
 			}else{
				res.status(200).send({profesion:profesionDeleted});
 			}
 		});
 	});
});

	app.delete('/profesionalesAdmin/:idProf',function(req,res){
		let id = req.params.idProf;
		id=id.substr(1,id.length);
 	Profesional.findById(id,function(err,profesionalDeleted){
 		if(err){
 			return res.status(500).send('error del servidor');
 		}
 		if(!profesionalDeleted){
 			return res.status(404).send('no se encontro la profesion');
 		}
 		profesionalDeleted.remove(function(err){
 			if(err){
 				return res.status(500).send('error al borrar');
 			}else{
				res.status(200).send({profesional:profesionalDeleted});
 			}
 		});
 	});
});

	app.delete('/usuariosAdmin/:idProf',function(req,res){
		let id = req.params.idProf;
		id=id.substr(1,id.length);
 	Profesion.findById(id,function(err,usuarioDeleted){
 		if(err){
 			return res.status(500).send('error del servidor');
 		}
 		if(!usuariosDeleted){
 			return res.status(404).send('no se encontro la profesion');
 		}
 		usuariosDeleted.remove(function(err){
 			if(err){
 				return res.status(500).send('error al borrar');
 			}else{
				res.status(200).send({usuario:usuariosDeleted});
 			}
 		});	
 	});
});

//

app.listen(app.get('port'),function(){
	console.log('server node de locatron REST marchando en: ',app.get('port'));
});
