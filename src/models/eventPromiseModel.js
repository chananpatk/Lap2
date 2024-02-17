const pool = require('../config/dbPromise');

function getAllEvents() {
    return pool.query('SELECT * FROM events')
        .then(([rows, fields]) => { // Changed from `[row, fields]` to `[rows, fields]`
            return rows;
        })
        .catch(err => {
            console.error('Error getting all events', err);
            throw err; // Re-throwing the error to propagate it to the caller
        });
}

function getEventsById(id) {
    return pool.query('SELECT * FROM events WHERE id = ?', [id])
    .then(([rows]) => {
        return rows[0];
    })
    .catch(err => {
        console.error('Error getting event by id', err);
        throw err;
    });
}

function getEventsByName(name) {
    return pool.query('SELECT * FROM events WHERE name = ?', [name])
    .then(([rows]) => {
        return rows[0];
    })
    .catch(err => {
        console.error('Error getting event', err);
        throw err;
    });
}

function getEventsByPartialName(name) {
    return pool.query('SELECT * FROM events WHERE name LIKE ?', [`%${name}%`])
    .then(([rows]) => {
        return rows;
    })
    .catch(err => {
        console.error('Error getting event by partial name', err);
        throw err;
    });
}





module.exports = {
    getAllEvents
};