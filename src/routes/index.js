const express = require('express');
const { validate } = require('../middlewares/validate');
const configController = require('../controllers/ConfigureBot.controller');
const configValidation = require('../validations/config.validation');


const router = express.Router();

router
  .route('/config')
  .post({}, validate(configValidation.createConfig), configController.createConfig);

// router
//   .route('/output')
//   .get({}, validate(userValidation.getUsers), userController.getUsers)

module.exports = router;