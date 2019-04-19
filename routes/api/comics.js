const express = require("express");
const router = express.Router();
const passport = require('passport');
const Comic = require('../../models/Comic');
const Comment = require('../../models/Comment');

router.get('/', (req, res) => {
    // const { skip = 0, limit = 10} = req.query;
    //  {
    //         skip: Number(skip),
    //         limit: Number(limit)
    //     }

    if (req.query.searchedQuery) {
        const regex = new RegExp(escapeRegex(req.query.searchedQuery), 'gi');
        Comic.find({ "dialog": regex },)
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

router.get('/:date/comments', (req, res) => {
    Comment.find({ comicDate: req.params.date })
        .sort({ date: 1 })
        .then(comments => res.json(comments))
        .catch(err => res.status(404).json({ nocommentsfound: 'No comments found' }));
});

router.get('/:date/comments/:comment', (req, res) => {
    Comment.findOne({ comicDate: req.params.date })
        .then(comments => res.json(comments))
        .catch(err => res.status(404).json({ nocommentsfound: 'No comment found' }));
});

router.post('/:date/comments', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    console.log(req.body);
    User.findById(req.user.id).then(user => {
        if (!user) return res.sendStatus(401);
        let comment = new Comment();
        comment.user = user.id;
        comment.text = req.body.text;
        comment.comicDate = req.body.comicDate;
        comment.save();
        return res.json(comment)
    }).catch(err => console.log(err));
});

router.param('comment', function (req, res, next, id) {
    Comment.findById(id).then(comment => {
        if (!comment) return res.sendStatus(404);
        req.comment = comment;
        return next();
    }).catch(next);
});

router.patch('/:date/comments/:comment', passport.authenticate('jwt', { session: false }), (req, res) => {
    if (req.comment.user && req.comment.user._id.toString() === req.user._id.toString()) {
        let comment = req.comment;
        comment.text = req.body.text;
        comment.save();
        return res.json(comment)
    } else {
        throw "You cannot edit this comment."
    }
})

router.delete('/:date/comments/:comment', passport.authenticate('jwt', { session: false }), (req, res) => {
    if (req.comment.user && req.comment.user._id.toString() === req.user._id.toString()) {
        Comic.findOne({ date: req.params.date })
            .then(comic => {
                comic.comments.remove(req.comment.id)
                comic.save();
            })
            .catch(err => console.log(err));
        req.comment.delete().then(() => res.sendStatus(204)).catch(() => res.sendStatus(403));
    } else {
        throw "You cannot delete this comment."
    }
});
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router;