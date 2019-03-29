const express = require("express");
const router = express.Router();
const Comic = require('../../models/Comic');

router.get('/', (req, res) => {
    Comic.find()
        .sort({ date: 1 })
        .then(comics => res.json(comics))
        .catch(err => res.status(404).json({ nocomicsfound: 'No comics found' }));
});


router.get('/:date', (req, res) => {
    Comic.find( {date: req.params.date } )
        .then(comic => res.json(comic))
        .catch(err =>
            res.status(404).json({ nocomicfound: 'No comic found with that date' })
        );
});

module.exports = router;