const catchAsync = require('../utils/catchAsync');

const createConfig = catchAsync(async (req, res) => {
    res.send("aoba")
  });

module.exports = {
    createConfig
};