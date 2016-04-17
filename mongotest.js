var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/coppia');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  var ideaSchema = mongoose.Schema({
      title: String,
      notes: String
  });

  ideaSchema.methods.fullidea = function () {
    var full = "This idea title is: " + this.title + " and the notes are: " + this.notes;
    console.log(full);
  }

  var Idea = mongoose.model('Idea', ideaSchema);

  var firstIdea = new Idea({title: 'Add Notes To Site', notes: 'This will be functionality to add to site'});

  //console.log(firstidea.notes);


  firstIdea.save(function(err, firstIdea) {
    if(err) return console.error(err);
    firstIdea.fullidea();
    console.log('Idea Saved!');
  });

  Idea.find(function(err, ideas) {
    if(err) return console.error(err);
    console.log(ideas);
  })
});
