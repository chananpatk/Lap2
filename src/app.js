const express = require('express');
const bodyParser = require('body-parser');  // เพิ่ม body-parser เข้ามา
const app = express();

app.use(bodyParser.json());  // เรียกใช้ body-parser middleware เพื่อแปลงข้อมูลจาก JSON เป็น JavaScript object

// Define a route for the root path ("/")
app.get('/',(req, res) => {
    res.send('Hello World!!!5');
});

app.get('/test',(req ,res) => {
    const id = req.query.id;

    const name = req.query.name || 'No name';
    const output = `id: ${id} and name: ${name}` ;
    res.send(output); 
 });
    
 app.get('/test/:id/name/:name', (req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    res.send(`id: ${id} and name: ${name}`);
 }); 

 app.post('/test', (req, res) => {
    const obj = req.body;             // req.body ต้องมีการเรียกใข้  body-parser ก่อน
    const id = obj.id;
    const name = obj.name;
    res.send(`id: ${id} and name: ${name}`);
});


app.listen(3000, () => {
    console.log('Server is listening on port 3000!');
});