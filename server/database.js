const mongoose = require('mongoose');
module.exports = function(config) {
	mongoose.connect(config.app.dbUrl + "/" + config.app.dbName);
	// mongoose.connect(config.app.mlabUrl);
	mongoose.connection.on('error', function(err) {
		console.log('error conencting to db');
	});
	mongoose.connection.once('open', function(done) {
		console.log('successfully connected to db');
	});

}