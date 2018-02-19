var data = require('../Difficulty.json');
var fs = require('fs');

/*
 * GET Interests page.
 */

exports.changeDifficulty = function (req, res) {
  var Easy = req.query.Easy;
  var Medium = req.query.Medium;
  var Hard = req.query.Hard;

  if (Easy != 'on') data.Difficulty[0].enabled = null;
  else data.Difficulty[0].enabled = 'checked';

  if (Medium != 'on') data.Difficulty[1].enabled = null;
  else data.Difficulty[1].enabled = 'checked';

  if (Hard != 'on') data.Difficulty[2].enabled = null;
  else data.Difficulty[2].enabled = 'checked';

  if (Easy != 'on' && Medium != 'on' && Hard != 'on') data.Difficulty[0].enabled = 'checked';
  var json = JSON.stringify(data, null, 2);
  fs.writeFile('Difficulty.json', json);

  res.render('index', data);
};
