const express = require('express');
const router = express.Router();
const movies = require('../mock/moviesMock');
router.get('/test', (req, res) => {
    const id = req.query.name 
    const name = req.query.name|| 'No name';
    const output = `id: ${id} and name: ${name}`;

    res.send(output);
});

// Get All
router.get('/', (req, res) => {
    res.send(movies);
})

// Query by rating
router.get('/movies/rating', (req, res) => {
    const rating = req.query.rating;
    console.log('rating' + rating);
    if (rating) {
        const movie = movies.filter(movie => movie.rating === rating);
        if (!movie) {
            res.status(404).send('The movie with the given rating was not found');
        } else {
            res.send(movie);
        }
    } else {
        res.send(movies);
    }
})  

// Get by Title
router.get('/movies/:title', (req, res) => {
    const title = req.params.title;
    const movie = movies.find(movie => movie.title === title);
    if (!movie) {
        res.status(404).send('The movie with the given title was not found');
    } else {
        res.send(movie);
    }
})
module.exports = router;
