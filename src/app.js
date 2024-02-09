const express = require('express');
const app = express();
// Define a route for the root path ("/")
app.get('/',(req, res) => {
    res.send('Hello World!!!');
});

app.get('/test',(req ,res) => {
const id = req.query.id;

const output = `id: ${id}` ;
res.send(output); 
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000!');
});