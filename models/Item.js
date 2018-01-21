var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Item = new Schema({
  name: {
    type: String
  },
  author: {
    type: String
  },
  text: {
    type: String
  }
},{
	collection: 'files'
});

module.exports = mongoose.model('Item', Item);
