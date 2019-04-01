const express = require("express");
const router = express.Router();
const passport = require('passport');
const Comment = require('../../models/Comment');

router.get('/:date/comments', (req, res, next) => {
  Comment.find({ comicDate: req.params.date })
    .sort({ date: 1 })
    .then(comments => res.json(comments))
    .catch(err => res.status(404).json({ nocommentsfound: 'No comments found' }));
});

router.post('/:date/comments', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  User.findById(req.user.id).then(user => {
    if (!user) return res.sendStatus(401);

    let comment = new Comment(req.body.comment);
    comment.text = req.body.text;
    comment.comicDate = req.params.date;
    comment.user = user.id;
    comment.save();

    Comic.findOne({ date: req.params.date })
      .then(comic => {
        comic.comments.push(comment)
        comic.save();
      })
      .catch(err => res.status(404).json({ nocomicfound: 'No comic found with that date' }));

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

router.delete('/:date/comments/:comment', passport.authenticate('jwt', { session: false }), (req, res, next) => {
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