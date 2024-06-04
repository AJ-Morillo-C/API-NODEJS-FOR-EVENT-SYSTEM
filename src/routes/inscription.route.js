const express = require('express');
const router = express.Router();
const { createInscription, getInscriptions, getInscription, updateInscription, deleteInscription } = require('../controllers/inscription.controller');

//---api/inscriptions
router.post('/', createInscription); // Create a Inscription
router.get('/', getInscriptions); // Get all Inscriptions
router.get('/:id', getInscription); // Get a Inscription
router.put('/:id', updateInscription); // Update a Inscription
router.delete('/:id', deleteInscription) // Delete a Inscription

module.exports = router;