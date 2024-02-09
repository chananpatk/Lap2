const express = require('express');
const app = express();
// Define a route for the root path ("/")
app.get('/',(req, res) => {
    res.send('Hello World!!!3210');
});

app.get('/test',(req ,res) => {
    const id = req.query.id;

    const name = req.query.name || 'No name';
    const output = `id: ${id} and name: ${name}` ;
    res.send(output); 
 });
    
 app.get('/test/:id/:name', (req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    res.send(`id: ${id} and name: ${name}`);
 });

app.listen(3000, () => {
    console.log('Server is listening on port 3000!');
});