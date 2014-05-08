var quote = require('./models/quote');

module.exports = function(app, request) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get('/api/v1/quote/random', function(req, res) {

		request('http://www.iheartquotes.com/api/v1/random?format=json', function (error, response, body) {
			if (!error && response.statusCode == 200) {

				parsedBody = JSON.parse(body);
				parsedBody = {
					"quote": parsedBody.quote,
					"link": parsedBody.link
				};

				quote.create({
					quote : parsedBody.quote,
					link : parsedBody.link
				}, function(err) {
					if (err)
						console.log('something went wrong with the mongodb');
				});

				res.send(parsedBody);
			}
		})
	});

	app.get('/api/v1/quote/random/cached', function(req, res) {
		quote.findRandom(function(err, quote) {
			if (err)
				res.send(err)
			res.send(quote);
		});
	});

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};