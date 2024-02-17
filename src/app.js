const express = require('express');
const app = express();
const {events} = require('./mock/eventMock');
const eventsRoutes = require('./routes/eventDbPromiseRoutes');
app.use(express.json());
app.use('/events', eventsRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Events API!');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000!');
}); 