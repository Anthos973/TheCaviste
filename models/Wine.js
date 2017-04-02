var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WineSchema = new Schema({
    name: String,
    type: String,
    year: Number,
    price: Number
});

module.exports = mongoose.model('Wine', WineSchema);