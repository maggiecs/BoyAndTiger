const express = require("express");
const router = express.Router();
const Comic = require('../../models/Comic');

router.get('/', (req, res) => {
    if (req.query.searchedQuery) {
        const regex = new RegExp(escapeRegex(req.query.searchedQuery), 'gi');
        Comic.find({ "dialog": regex })
            .sort({ date: 1 })
            .then(comics => res.json(comics))
            .catch(err => res.status(404).json({ nocomicsfound: 'No comics found' }));   
    } else {
        Comic.find()
            .sort({ date: 1 })
            .then(comics => res.json(comics))
            .catch(err => res.status(404).json({ nocomicsfound: 'No comics found' }));   
    }
});


router.get('/:date', (req, res) => {
    Comic.find( { datestring: parseInt(req.params.date) } )
        .then(comic => res.json(comic))
        .catch(err =>
            res.status(404).json({ nocomicfound: 'No comic found with that date' })
        );
});

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router;