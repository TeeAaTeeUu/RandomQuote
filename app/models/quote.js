var mongoose = require('mongoose');
var random = require('mongoose-random');

var Schema = new mongoose.Schema({
	quote : String,
	link : String
})

Schema.plugin(random());

Schema.method('toJSON', function() {
    var data = this.toObject();
    delete data.random;
    delete data._id;
    delete data.__v;
    return data;
  });
module.exports = mongoose.model('quote', Schema);