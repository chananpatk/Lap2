const express = require('express');
const router = express.Router();
const { getEventsByPartialName, getAllEvents, addEvent } = require('../models/eventMockModel');
// require ('../models/eventMockModel');

router.get('/', (req, res) => {
    const name = req.query.name;
    if (name) {
        const events = getEventsByPartialName(name);
        if (!events.length) {
            res.status(404).send('The event with the given name was not found');
        } else {
            res.send(events);
        }
    } else {
        res.send(getAllEvents());
    }
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        res.status(400).send('Invalid event ID');
        return;
    }
    const event = getAllEvents().find(event => event.id === id);
    if (!event) {
        res.status(404).send('The event with the given ID was not found');
    } else {
        res.send(event);
    }
});

router.post('/', (req, res) => {
    const event = req.body;
    addEvent(event);
    res.send(event);
});

module.exports = router;
