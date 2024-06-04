const Event = require('../models/events.model');

//CRUD EVENT

//CREATE
const createEvent = async (req, res) => {
    try {
        const event = await Event.create( req.body );
        res.status(200).json( event );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//READ ALL EVENTS
const getEvents = async (req, res) => {
    try {
        const events = await Event.find({});
        res.status(200).json( events );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//READ ONE EVENT
const getEvent = async (req, res) => {
    try {
        const { id } = req.params;

        const event = await Event.findById( id );
        res.status(200).json( event );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//UPDATE EVENT
const updateEvent = async (req, res) => {
    try {
        const { id } = req.params;

        const event = await Event.findByIdAndUpdate( id, req.body );

        if( !event ) return res.status(404).json({ message: "Event not Found!" })

        const updatedEvent = await Event.findById( id );

        res.status(200).json( updatedEvent );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//DELETE EVENT
const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;

        const event = await Event.findByIdAndDelete( id );

        if( !event ) return res.status(404).json({ message: "Event not Found!" })
        
        res.status(200).json({ message: "Event Deleted Succesfully!" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    createEvent,
    getEvents,
    getEvent,
    updateEvent,
    deleteEvent
}