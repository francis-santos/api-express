const catchAsync = require('../utils/catchAsync');

const getOutputBotJob = catchAsync((req, res) => {
    res.send("getOutputBotJob");
});

module.exports = {
    getOutputBotJob,
};