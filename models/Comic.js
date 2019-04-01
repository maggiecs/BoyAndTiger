const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComicSchema = new Schema({
    date: {
        type: Number,
    },
    dialog: {
        type: String,
    },
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = Comic = mongoose.model('comic', ComicSchema);