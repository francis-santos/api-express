const express = require('express');
const router = express.Router();
const configValidation = require('../validations/config.validation');
const { validate } = require('../middlewares/validate');
const configController = require('../controllers/ConfigureBot.controller');
const outputBotController = require('../controllers/OutputBot.controller');

router.post('/config', validate(configValidation.createConfig), configController.createConfig);

router.get('/output', outputBotController.getOutputBotJob);

module.exports = router;