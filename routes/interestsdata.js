var data = require('../Interests.json');
/*
 * GET Interests data.
 */

exports.view = function (req, res) {
  res.json(data);
};