var express = require('express');
var path = require('path');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
	host : 'ipro.lambton.on.ca',
	user : 'contacts_ro',
	password : 'CPROIPRO',
	database: 'contacts'
});

app.get('/', function(req,res){
		var sql = 'SELECT * FROM ??';
		var inserts = ['contacts']
		var q = mysql.format(sql, inserts);
		connection.query(q, function(err, rows){
			res.send(rows);
		});
});

	/*var sql = 'SELECT * FROM contacts WHERE ?? = ?';
	var inserts = ['employees', 'emp_no', req.params.id];
	var q = mysql.format(sql, inserts);
	connection.query(q, function (err, rows) {
		res.send(rows);
	});*/


app.get('/first/:first', function(req,res) {
		var first = req.params.first;
		var sql = 'SELECT * FROM ?? WHERE first = ?';
		var inserts = ['contacts', first]
		var q = mysql.format(sql, inserts);
		connection.query(q, function(err, rows){
		    if (rows.length == 1) rows = rows[0];
			res.send(rows);
		});
});
app.get('/last/:last', function(req,res){
		var last = req.params.last;
		var sql = 'SELECT * FROM ?? WHERE last = ?';
		var inserts = ['contacts', last]
		var q = mysql.format(sql, inserts);
		connection.query(q, function(err, rows){
		    if (rows.length == 1) rows = rows[0];
			res.send(rows);
		});
		
});

app.get('/extension/:extension', function(req,res){
		var extension = req.params.extension;
		var sql = 'SELECT * FROM ?? WHERE extension = ?';
		var inserts = ['contacts', extension]
		var q = mysql.format(sql, inserts);
		connection.query(q, function(err, rows){
		    if (rows.length == 1) rows = rows[0];
			res.send(rows);
		});
		
		
});

app.get('/id/:id', function(req,res){
		var id = req.params.id;
		var sql = 'SELECT * FROM ?? WHERE id = ?';
		var inserts = ['contacts', id]
		var q = mysql.format(sql, inserts);
		connection.query(q, function(err, rows){
		    if (rows.length == 1) rows = rows[0];
			res.send(rows);
		});
});

app.get('/office/:office', function(req,res){
		var office = req.params.office;
		var sql = 'SELECT * FROM ?? WHERE office = ?';
		
		var inserts = ['contacts', office]
		var q = mysql.format(sql, inserts);
		connection.query(q, function(err, rows){
		    if (rows.length == 1) rows = rows[0];
			res.send(rows);
		});
});

app.get('/department/:department', function(req,res){
		var department = req.params.department;
		var sql = 'SELECT * FROM ?? WHERE department = ?';
		var inserts = ['contacts', department]
		var q = mysql.format(sql, inserts);
		connection.query(q, function(err, rows){
		    if (rows.length == 1) rows = rows[0];
			res.send(rows);
		});
});

app.get('/manager/:manager', function(req,res){
		var manager = req.params.manager;
		var sql = 'SELECT * FROM ?? WHERE manager = ?';
		var inserts = ['contacts', manager]
		var q = mysql.format(sql, inserts);
		connection.query(q, function(err, rows){
		    if (rows.length == 1) rows = rows[0];
			res.send(rows);
		});
});

app.get('/first/:first/last/:last', function(req,res){
		var first = req.params.first;
		var last =  req.params.last;
		var sql = 'SELECT * FROM ?? WHERE first = ? AND last = ?';
		
		var inserts = ['contacts', first, last]
		var q = mysql.format(sql, inserts);
		connection.query(q, function(err, rows){
		    if (rows.length == 1) rows = rows[0];
			res.send(rows);
		});
});

app.get('/find/:field/:part', function(req,res){
		var field = req.params.field;
		var part =  '%' + req.params.part + '%';
		var sql = 'SELECT * FROM ?? WHERE ?? LIKE ?';
		var inserts = ['contacts', field, part]
		
		var q = mysql.format(sql, inserts);
		connection.query(q, function(err, rows){
			if (err) throw err;
		    if (rows.length == 1) rows = rows[0];
			res.send(rows);
		});
});

var server = app.listen(8001, function (err) {
	console.log('Listening on Port 8001');
});

