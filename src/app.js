const express = require('express');
const app = express();
// Define a route for the root path ("/")
app.get('/',(req, res) => {
    res.send('Hello World!!!321');
});

app.get('/test',(req ,res) => {
const id = req.query.id;

const name = req.query.name || 'No name';
const output = `id: ${id} and name: ${name}` ;
    res.send(output); 
 });
    

app.listen(3000, () => {
    console.log('Server is listening on port 3000!');
});