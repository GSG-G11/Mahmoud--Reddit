const Joi = require("joi");

module.exports = Joi.object({
  description: Joi.string().required(),
});
