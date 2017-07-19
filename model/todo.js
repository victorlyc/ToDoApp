var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todo = new Schema({
	creDate : Date,
	category : String,
	text : String
});

module.exports = mongoose.model('Todo', Todo);
