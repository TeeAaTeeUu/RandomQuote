var mongoose = require('mongoose');

module.exports = mongoose.model('quote', {
	text : String,
	link : String
});