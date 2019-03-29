const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComicSchema = new Schema({
    date: {
        type: Date,
        // default: Date.now
    },
    dialog: {
        type: String,
        required: true
    },  
});

module.exports = Comic = mongoose.model('comic', ComicSchema);