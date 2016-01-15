/*!
 * online - server.js
 */
process.env.NODE_ENV = process.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
	express = require('./config/express');

var db = mongoose();
var app = express();
app.listen(3000);//app.listen(port/path, listener)下面的console.log(并不是真正的linstened)
module.export = app;

console.log('Server running at http://localhost:3000');
