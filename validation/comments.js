const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCommentInput(data) {
  let errors = {};

  data.text = validText(data.text) ? data.text : '';

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  if (!Validator.isLength(data.text, { max: 500 })) {
    errors.text = 'Comment must be less than 500 characters';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };

};