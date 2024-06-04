const mongoose = require('mongoose');

const EventsSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, 'title is required'],
    },
    description:{
        type: String,
        required: [true, 'description is required'],
    },
    location:{
        type: String,
        required: [true, 'location is required'],
    },
    date:{
        type: String,
        required: [true, 'date is required'],
    },
    time:{
        type: String,
        required: [true, 'time is required'],
    },
    organizer: {
        name: {
            type: String,
            required: [true, 'name is required'],
          },
        email: {
            type: String,
            required: [true, 'email is required'],
          },
        phone: {
            type: String,
            required: [true, 'phome is required'],
          },
      },
    type:{
        type: String,
        required: [true, 'event type is required'],
    },
});

const Event = mongoose.model('Event', EventsSchema);

module.exports = Event;