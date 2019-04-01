const express = require("express");
const router = express.Router();
const passport = require('passport');
const Comic = require('../../models/Comic');
const Comment = require('../../models/Comment');

router.get('/', (req, res) => {
    Comic.find()
        .sort({ date: 1 })
        .then(comics => res.json(comics))
        .catch(err => res.status(404).json({ nocomicsfound: 'No comics found' }));
});


router.get('/:date', (req, res) => {
    Comic.find( {date: req.params.date })
        .then(comic => res.json(comic))
        .catch(err =>
            res.status(404).json({ nocomicfound: 'No comic found with that date' })
        );
});

router.get('/:date/comments', (req, res, next) => {
    Comment.find( {comicDate: req.params.date })
        .sort({ date: 1 })
        .then(comments => res.json(comments))
        .catch(err => res.status(404).json({ nocommentsfound: 'No comments found' }));
});

router.post('/:date/comments', passport.authenticate('jwt', { session: false }), (req,res, next) => {
    User.findById(req.user.id).then( user => {
        if(!user) return res.sendStatus(401);

        let comment = new Comment(req.body.comment);
        comment.text = req.body.text;
        comment.comicDate = req.params.date;
        comment.save();
        
        Comic.findOne( { date: req.params.date })
            .then(comic => {
                comic.comments.push(comment)
                comic.save();
            })
            .catch(err => res.status(404).json({ nocomicfound: 'No comic found with that date' }));

        return res.json(comment)
    }).catch(err => console.log(err));
});

// throws 404 error if comment doesn't exist
// is this wanted/needed?
router.param('comment', function(req,res,next,id){
    Comment.findById(id).then( comment => {
        if(!comment) return res.sendStatus(404) ;

        req.comment = comment;

        return next();
    }).catch(next);
});

router.delete('/:date/comments/:comment', passport.authenticate('jwt', { session: false }), (req,res,next) => {
    User.findById(req.payload.id).then(user => {
        if(req.comment.author._id.toString() === req.payload.id.toString()){
            req.comic.comments.remove(req.comment._id);
            return req.comic.save()
                .then(Comment.findOne({_id: req.comment._id}).remove().exec())
                .then( () => { return res.sendStatus(204)})
        } else {
            return res.sendStatus(403);
        }
    }).catch(next);
});


module.exports = router;