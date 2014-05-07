var request = require('request');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get('/api/v1/quote/random',function(req, res) {
		request('http://www.iheartquotes.com/api/v1/random?format=json', function (error, response, body) {
			if (!error && response.statusCode == 200) {
				var docu = body;
				res.send(body);
			}
		})

		var quote = require('./models/quote');
		quote.create({
					text : "test",
					link : "two"
				  }, function(err) {
					if (err)
						console.log('something went wrong with the mongodb');
				  }
				);
	});


	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};