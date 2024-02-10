const express = require('express');
const bodyParser = require('body-parser');  // เพิ่ม body-parser เข้ามา
const app = express();
app.use(bodyParser.json());  // เรียกใช้ body-parser middleware เพื่อแปลงข้อมูลจาก JSON เป็น JavaScript object
app.use(express.json());
const movies = [
    {
        "title": "Interstellar",
        "genre": "Science Fiction",
        "releaseYear": 2014,
        "rating": "PG-13",
        "description": "A team of astronauts travel through a wormhole in search of a new home for humanity.",
        "country": "USA"
    },
    {
        "title": "The Shawshank Redemption",
        "genre": "Drama",
        "releaseYear": 1994,
        "rating": "R",
        "description": "A man wrongly convicted of murder finds hope and redemption within the walls of a prison.",
        "country": "USA"
    },
    {
        "title": "Spirited Away",
        "genre": "Animation",
        "releaseYear": 2001,
        "rating": "PG",
        "description": "A young girl enters a magical spirit world and must find a way to rescue her parents.",
        "country": "Japan"
    },
    {
        "title": "The Room",
        "genre": "Comedy-Drama",
        "releaseYear": 2003,
        "rating": "R",
        "description": "A melodramatic love triangle and questionable acting choices lead to one of the most unintentionally hilarious films ever made.",
        "country": "USA"
    },
    {
        "title": "Parasite",
        "genre": "Thriller",
        "releaseYear": 2019,
        "rating": "R",
        "description": "A poor family schemes their way into the lives of a wealthy household, with dark and unexpected consequences.",
        "country": "South Korea"
    }
]

// Get All
app.get('/movies', (req, res) => {
    res.send(movies);
})

// Query by rating
app.get('/movies/rating', (req, res) => {
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
app.get('/movies/:title', (req, res) => {
    const title = req.params.title;
    const movie = movies.find(movie => movie.title === title);
    if (!movie) {
        res.status(404).send('The movie with the given title was not found');
    } else {
        res.send(movie);
    }
})


/*
// Get by rating
app.get('/movies/rating/:rating', (req, res) => {
    const rating = req.params.rating;
    const movie = movies.filter(movie => movie.rating === rating);
    if (!movie) {
        res.status(404).send('The movie with the given rating was not found');
    } else {
        res.send(movie);
    }
})  
*/

app.listen(3000, () => {
    console.log('Server is listening on port 3000!');
});