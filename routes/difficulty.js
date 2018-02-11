var data = require('../Difficulty.json');
/*
 * GET Difficulty page.
 */

exports.view = function (req, res) {
  res.render('difficulty', data);
};
