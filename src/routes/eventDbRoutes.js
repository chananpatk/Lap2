const express = require('express');
const router = express.Router();
// const { getEventsByName, getEventsByPartialName, getAllEvents, addEvents } = require('../models/eventModel');
const eventModel = require('../models/eventModel');
const { getAllEvents } = require('../models/eventMockModel');

router.get('/', (req, res) => {
    const name = req.query.name;
    if (name) {
        eventModel.getEventsByPartialName(name, (err, results) => {
            if (err) {
                res.status(500).send('Error getting events by partial name');
            } else {
                res.send(results);
            }
        });
    } else {
        eventModel.getAllEvents((err, results) => {
            if (err) {
                res.status(500).send('Error getting all events');
                return;
            }
                res.send(results);
        })
    }
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    eventModel.getEventsById(id, (err, results) => {
        const event = results;
        if (!event) {
            res.status(404).send('The event with the given ID was not found');
        } else {
            res.send(event);
        }
        res.send(results);
    })
});

router.post('/', (req, res) => {
    const event = req.body;
    eventModel.addEvents(event, (err, results) => {
        if (err) {
            res.status(500).send('Error adding event');
        } else {
            res.send(event);
        }
    });
});

module.exports = router;
