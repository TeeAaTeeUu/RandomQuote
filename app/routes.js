module.exports = function(app, request) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get('/api/v1/quote/random', function(req, res) {

		request('http://www.iheartquotes.com/api/v1/random?format=json', function (error, response, body) {
			if (!error && response.statusCode == 200) {
    			res.send(body);
			}
		})
	});


	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};