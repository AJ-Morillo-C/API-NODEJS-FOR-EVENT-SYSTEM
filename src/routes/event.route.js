const express = require('express');
const router = express.Router();
const { createEvent, getEvents, getEvent, updateEvent, deleteEvent } = require('../controllers/event.controller');

//---api/events
router.post('/', createEvent); // Create a Event
router.get('/', getEvents); // Get all Events
router.get('/:id', getEvent); // Get a Event
router.put('/:id', updateEvent); // Update a Event
router.delete('/:id', deleteEvent) // Delete a Event

module.exports = router;