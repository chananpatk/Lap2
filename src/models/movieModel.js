const conn = require('../config/db');

function getAllMovies(callback) {
    const result = conn.query('SELECT * FROM movies', (err, results) => {
        if (err) {
            console.error('Error getting movies: ', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

function getMovieByTitle(title, callback) {
    const sql = 'SELECT * FROM movies WHERE title = ?';
    conn.query(sql, [title], (err, results) => {
        if (err) {
            console.error('Error getting movie by title: ', err);
            return callback(err, null);
        }
        return callback(null, results);
    });
}

function addMovie(movie, callback) {
    const { title, director, year } = movie;
    const sql = 'INSERT INTO movies (title, director, year) VALUES (?, ?, ?)';
    conn.query(sql, [title, director, year], (err, results) => {
        if (err) {
            console.error('Error adding movie: ', err);
            return callback(err);
        }
        return callback(null, results);
    });
}

function deleteMovieByTitle(title, callback) {
    const sql = 'DELETE FROM movies WHERE title = ?';
    conn.query(sql, [title], (err, results) => {
        if (err) {
            console.error('Error deleting movie by title: ', err);
            return callback(err);
        }
        return callback(null, results);
    });
}


module.exports = {
    getAllMovies,
    getMovieByTitle,
    addMovie,
    deleteMovieByTitle
};
