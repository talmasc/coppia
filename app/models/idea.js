var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IdeaSchema = new Schema({
  title: {type: String, trim: true},
  notes: {type: String, trim: true}
});

module.exports = mongoose.model('idea', IdeaSchema);
