const express = require('express');
const router = express.Router();
const movies = require('../mock/moviesMock');
//const { moviesDdRoutes } = require('./routes/moviesRoutes');

// Get All Movies
router.get('/movies', (req, res) => {
    getAllMovies((err, results) => {
        if (err) {
            res.status(500).send('Error getting movies');
            return;
        } 
        res.send(results);
    });
});

// Add Movie
router.post('/movies', (req, res) => {
    const newMovie = req.body;
    movies.push(newMovie);
    res.status(201).send(newMovie);
});

// Delete Movie by Title
router.delete('/movies/:title', (req, res) => {
    const title = req.params.title;
    const index = movies.findIndex(movie => movie.title === title);
    if (index === -1) {
        res.status(404).send('No movie found with the given title');
    } else {
        movies.splice(index, 1);
        res.send('Movie deleted successfully');
    }
});

// Get All
router.get('/', (req, res) => {
    res.send(movies);
});

// Query by rating
router.get('/movies/rating', (req, res) => {
    const rating = req.query.rating;
    console.log('rating' + rating);
    if (rating) {
        const movie = movies.filter(movie => movie.rating === rating);
        if (movie.length === 0) {
            res.status(404).send('No movies found with the given rating');
        } else {
            res.send(movie);
        }
    } else {
        res.send(movies);
    }
});

// Get by Title
router.get('/movies/:title', (req, res) => {
    const title = req.params.title;
    const movie = movies.find(movie => movie.title === title);
    if (!movie) {
        res.status(404).send('No movie found with the given title');
    } else {
        res.send(movie);
    }
});

module.exports = router;
