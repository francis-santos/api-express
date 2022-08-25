const Joi = require('joi');

const createConfig = {
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      name: Joi.string().required(),
      role: Joi.string().required().valid('user', 'admin'),
    }),
  };

module.exports = {
  createConfig
};