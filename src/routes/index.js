const express = require('express');


const router = express.Router();

router
  .route('/config')
  .post({}, validate(userValidation.createUser), userController.createUser);

router
  .route('/output')
  .get({}, validate(userValidation.getUsers), userController.getUsers)

module.exports = router;