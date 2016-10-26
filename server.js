'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var app = express();
//require('dotenv').load();


app.use('/public', express.static(process.cwd() + '/public'));
routes(app);

var port = process.env.PORT;
app.listen(port,  function () {
	console.log('server listening on port ' + port + '...');
});
