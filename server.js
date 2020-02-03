const express = require("express");


const PORT = 8000; 
const app = express();


//routes
app.get("/", (req, res) => {
    res.send("Hello world");

});

app.get("/", (req, res) => {
    res.json();
});




app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});


