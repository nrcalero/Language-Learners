var data = require('../Interests.json');
/*
 * GET Interests page.
 */

exports.view = function (req, res) {
  res.render('interests', data);
};
