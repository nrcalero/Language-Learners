var interests = require('../Interests.json');

/*
 * GET Home page.
 */

exports.view = function (req, res) {
	interests['viewAlt'] = false;	
 	res.render('index', interests);
};

exports.viewAlt = function(req, res) {
	interests['viewAlt'] = true;	
	res.render('index', interests);
}
