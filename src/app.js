const express = require('express');
const app = express();
//const movies = require('./mock/moviesMock');//
const moviesRoutes = require('./routes/moviesRoutes');
app.use(express.json());
app.use('/movies', moviesRoutes);

app.get('/', (req, res) => {

});

app.listen(3000, () => {
    console.log('Server is listening on port 3000!');
}); 