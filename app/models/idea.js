var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IdeaSchema = new Schema({
  title: {type: String, trim: true},
  notes: {type: String, trim: true},
  created_by: String,
  created_date: Date
  updated_by: String,
  updated_date: Date
});

module.exports = mongoose.model('idea', IdeaSchema);
