const express = require('express');
const { outputBotController } = require('../controllers');


const router = express.Router();

// router
//   .route('/config')
//   .post({}, validate(userValidation.createUser), userController.createUser);

router.get('/output', outputBotController.getOutputBotJob);

module.exports = router;