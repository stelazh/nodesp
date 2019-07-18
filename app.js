
var express = require('express');
var mysql = require('mysql');
const util = require('util');
var sConnection={host: '162.241.252.65', port: 3306, user: 'proctos0_tester', password: 'tester123*', database: 'proctos0_testsepa', multipleStatements: true};
var app = express();
app.use(express.static('.')); // Consente modalità "static"
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended: true }));

app.use(function (req, res, next) {

	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', '*'); //'http://localhost:8888');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});


//#region METODI GET	

		app.get("/listStudenti",function(req,res){
			connection= mysql.createConnection(sConnection)	;
			connection.connect(function(err){
				if (!err){
					var sQuery="SELECT * FROM studente";	
					connection.query(sQuery,function(err,rows,fileds){
					if (err) 
						res.sendStatus(500); //Internal Server Error
						else
						res.setHeader('Access-Control-Allow-Origin','*');
						res.json(rows); //resituisce tutti i records in formato json
					})
				}
				else
				{
					console.log(err);
				}
			})
		})



        app.listen(3000);






















