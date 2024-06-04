const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const InscriptionsSchema = mongoose.Schema(
  {
      event_id: {
          type: ObjectId,
          required: [true, 'event_id is required'],
        },
      registered: {
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
    },
    {
      timestamps: true,
    }
);

const Inscription = mongoose.model('Inscription', InscriptionsSchema);

module.exports = Inscription;