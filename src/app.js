const express = require('express');
const app = express();
// Define a route for the root path ("/")
app.get('/',(req, res) => {
    res.send('Hello World!!!TEST1223444');
});

app.get('/test',(req ,res) =>{
    return0bj = {
        name: 'Test',
        age: 20,
        address: 'Thai'
    }
    res.send(return0bj)
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000!');
});