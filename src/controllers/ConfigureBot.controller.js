const catchAsync = require('../utils/catchAsync');

const createConfig = catchAsync(async (req, res) => {
    console.log("CreateConfig method")
  });

  module.exports = {
    createConfig
  };