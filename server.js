const express = require("express");
const notes = require('./db.json')

const PORT = 5500;

const app = express();
const path = require("path");

app.use(express.static('public'))


//router to return the notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});


//api routes
//router to save a unique id
app.get("/test/:id", (req, res) => {
    res.render("test", { output: req.params.id })
});


//API routes
//get /api/notes to read the db.js file and return saved notes

//route to the db.json file
//app.get('/api/notes/:id', (req, res) => {
//    res.sendfile(path.join(_dirname, '/db.js')); 

//});
//all notes
app.get('/api/notes', (req, res) => {
    res.json(notes)

});

//post api notes receive new note,save on the request body and add to db.json then return to new note client
app.post('/api/notes', (req, res) => {
    res.send(notes);
});


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
