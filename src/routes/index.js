const express = require('express');


const router = express.Router();

router
  .route('/config')
  .post({}, validate(userValidation.createUser), userController.createUser);

router.get('/output', outputBotController.getOutputBotJob);

module.exports = router;