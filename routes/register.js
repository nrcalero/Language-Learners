var fs = require('fs');
var interests = require('../Interests.json');
var difficulty = require('../Difficulty.json');

/*
 * GET Register page.
 */

exports.view = function (req, res) {
	console.log(interests.Interests.length);
	for (var i = 0; i < interests.Interests.length; ++i) {
		interests.Interests[i].enabled = null;
	}
	for (var i = 1; i < difficulty.Difficulty.length; ++i) {
		difficulty.Difficulty[i].enabled = null;
	}
	var json = JSON.stringify(interests, null, 2);
  	fs.writeFile('Interests.json', json);
 	var json2 = JSON.stringify(difficulty, null, 2);
  	fs.writeFile('Difficulty.json', json2);
  res.render('register');
};
