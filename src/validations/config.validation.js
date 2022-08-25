const Joi = require('joi');

const createConfig = Joi.object({
  type: Joi.string().required(),
  dataset_start: Joi.string().required(),
  dataset_end: Joi.string().required(),
  token: Joi.string().required(),
  inputs: Joi.array().items(Joi.string().valid("close", "volume", "otimismo")),
});

module.exports = {
  createConfig
};