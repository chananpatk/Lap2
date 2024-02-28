const Participant = require('../db/models/participant');
const sequelize = require('../config/dbSequelize');
const { DataTypes, Op } = require('sequelize');
const {Event:event, Participant:participant} = Participant(sequelize,DataTypes);

exports.getAllEvents = () => {
    return event.findAll({include: ['participants']})
        .then(events => events)
        .catch(error => console.error('Error getting events:', error));
}