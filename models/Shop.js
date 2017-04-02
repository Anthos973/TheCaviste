var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shopSchema = new Schema({
	name: String,
	adress: String,
	Wine : [{type:Schema.Types.objectID, ref:"Wine"}],
	Owner: {type: Schema.Types.objectID, ref: "User"}

});

module.exports = mongoose.model('Shop', shopSchema);