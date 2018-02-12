var interests = require('../Interests.json')


/*
 * GET Storyboards page.
 */

exports.view = function (req, res) {
	var interestlist = [];
	var index = 0;
	for (var key in interests.Interests) {
		if (interests.Interests[key].enabled == 'checked') {
			interestlist[index] = interests.Interests[key];
			++index;
		}
	}
	var interestJSON = {'Interests' : interestlist};
	console.log(interestJSON);
  res.render('storyboards', interestJSON);
};
