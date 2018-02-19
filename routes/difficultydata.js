var data = require('../Difficulty.json');


exports.view = function (req, res) {
  res.json(data);
};
