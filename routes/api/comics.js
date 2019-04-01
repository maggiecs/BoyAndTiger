const express = require("express");
const router = express.Router();
const Comic = require('../../models/Comic');
const Comment = require('../../models/Comment');

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

router.post('/:date/comments', auth.required, (req,res, next) => {
    User.findById(req.payload.id).then(function(user){
        if(!user) return res.sendStatus(401);

        let comment = new Comment(req.body.comment);
        comment.author = user;
        comment.comic = req.comic;
        comment.save();

        req.comic.comments.push(comment);
        return req.comic.save().then(function(){
            return res.json({comment: comment.toJSONFor(user)});
        });
    }).catch(next);
});

router.get('/:date/comments', auth.optional, (req, res, next) => {
    Promise.resolve(req.payload ? User.findById(req.payload.id) : null).then(user => {
        return req.comic.populate({
            path: 'comments',
            populate: {
                path: 'author'
            },
            options: {
                sort: { date: 1 }
            }
        }).execPopulate().then(() => {
            return res.json({ comments: req.comic.comments.map(() => {
                return comment.toJSONFor(user);
            })})
        })
    }).catch(next);
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

router.delete('/:article/comments/:comment', auth.required, (req,res,next) => {
    User.findById(req.payload.id).then(user => {
        if(req.comment.author._id.toString() === req.payload.id.toString()){
            req.comic.comments.remove(req.comment._id);
            return req.article.save()
                .then(Comment.findOne({_id: req.comment._id}).remove().exec())
                .then( () => { return res.sendStatus(204)})
        } else {
            return res.sendStatus(403);
        }
    }).catch(next);
});

module.exports = router;