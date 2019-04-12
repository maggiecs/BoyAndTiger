const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComicSchema = new Schema({
    ord: {
        type: Number,
    },
    date: {
        type: Date,
    },
    datestring: {
        type: Number,
    },
    books: {
        type: String,
    },
    dialog: {
        type: String,
    },
<<<<<<< HEAD
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
=======
    desc: {
        type: String,
    },
>>>>>>> master
});

module.exports = Comic = mongoose.model('comic', ComicSchema);