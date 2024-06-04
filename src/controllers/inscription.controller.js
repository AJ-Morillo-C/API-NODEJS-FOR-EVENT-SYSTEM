const Inscription = require('../models/inscriptions.model');

//CRUD EVENT

//CREATE
const createInscription = async (req, res) => {
    try {
        const inscription = await Inscription.create( req.body );
        res.status(200).json( inscription );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//READ ALL EVENTS
const getInscriptions = async (req, res) => {
    try {
        const inscriptions = await Inscription.find({});
        res.status(200).json( inscriptions );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//READ ONE EVENT
const getInscription = async (req, res) => {
    try {
        const { id } = req.params;

        const inscription = await Inscription.findById( id );
        res.status(200).json( inscription );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//UPDATE EVENT
const updateInscription = async (req, res) => {
    try {
        const { id } = req.params;

        const inscription = await Inscription.findByIdAndUpdate( id, req.body );

        if( !inscription ) return res.status(404).json({ message: "Inscription not Found!" })

        const updatedInscription = await Inscription.findById( id );

        res.status(200).json( updatedInscription );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//DELETE EVENT
const deleteInscription = async (req, res) => {
    try {
        const { id } = req.params;

        const inscription = await Inscription.findByIdAndDelete( id );

        if( !inscription ) return res.status(404).json({ message: "Inscription not Found!" })
        
        res.status(200).json({ message: "Inscription Deleted Succesfully!" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    createInscription,
    getInscriptions,
    getInscription,
    updateInscription,
    deleteInscription
}