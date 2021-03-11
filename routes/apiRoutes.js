
const noteData = require('../Develop/db/db.json');

// ROUTING for the different requests that come in via API
module.exports = (app) => {
  //This is the GET request handler.
  app.get('/api/notes', (req, res) => res.json(noteData));

  //This is the POST request handler.
  app.post('/api/notes', (req, res) => {
    // This code adds an id to the note before it is stored in the db.json fiile
      let array = req.body;
      array.id;
      for (let i = 0; i < noteData.length; i++) {
        array.id = i;
      }
    // This bit sends the note to the db.json file.
      noteData.push(req.body);
      res.json(true);
  });

  // This is the DELETE request handler.
  app.delete('/api/notes/:id', (req, res) => {

    // Gets the id of the note you want to delete.
    const chosen = req.params.id;
  
    // gets the id of the object that has the value of chosen
    var removeId = noteData.map(function(item) { return item.id; }).indexOf(chosen);

    // remove object from db.json
    noteData.splice(removeId, 1);
    res.json(true);
  });
};
