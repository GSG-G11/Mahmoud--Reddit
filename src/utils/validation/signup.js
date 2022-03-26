const Joi = require("joi");

module.exports = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().alphanum().min(3).required(),
  password: Joi.string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .required(),
});
