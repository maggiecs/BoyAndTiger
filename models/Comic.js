const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComicSchema = new Schema({
    date: {
        type: Number,
    },
    dialog: {
        type: String,
    },  
});

module.exports = Comic = mongoose.model('comic', ComicSchema);