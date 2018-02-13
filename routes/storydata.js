var data = require('../stories.json');
/*
 * GET Interests data.
 */

exports.view = function (req, res) {
  res.json(data);
};
