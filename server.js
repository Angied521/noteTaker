const express = require("express");
const notes = require('./db.json')

const PORT = 5500;

const app = express();
const path = require("path");

//var newNote = require('./db.json');

//var noteText = [];

//const storage = require("storage")

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router to return the notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});
//route to return the journal.json file
app.get('/notes', (req,res) => {
    res.sendfile(path.join(__dirname, '/journal.json'))
});
//route to index.js
app.get('/notes', (req, res) => {
    res.sendfile(path.join(__dirname, '/js/index.js'))
});

app.get('/api/notes', (req, res) => {
    return res.json(notes);
});


//router to save a unique id
// app.delete("/api/notes/:id", (req, res) => {
//     storage.removeNote(req.params.id)
//     console.log(storage.removeNote(req.param.id))
//     .then(() => res.json({
//         ok: true

//     }))
//     .catch(error => {
//         return res.status(500).json(error);
//     })
// });


app.get("/api/noteTest", (req, res) => {
    res.json("noteTest")
   
});

//posts notes to notes.html
app.post('/api/notes', (req, res) => {
    var newNote = req.body;
    newNote.title = newNote.text.replace(/\s+/g, "").toLowerCase();

  console.log(newNote);

  notes.push(newNote);

  res.json(newNote);
})
  
app.delete('/api/notes/:id', (req, res) => {
    
})


//Delete api/notes by :id
//read the note fron the db.json file 
//remove by given id
// rewrite the note to the db.json file
app.delete("/api/notes/:id", (req, res) => {
    res.send(note);
});



//router to retun the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

//listener
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});

module.exports = app
