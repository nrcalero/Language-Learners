var data = require('../Interests.json');
var updater = require('jsonfile-updater');
var fs = require('file-system');

/*
 * GET Interests page.
 */

exports.changeInterests = function (req, res) {
  var sports = req.query.sports;
  var fooddrink = req.query.fooddrink;
  var news = req.query.news;
  var music = req.query.music;
  var healthfitness = req.query.healthfitness;
  var technology = req.query.technology;
  if (sports != 'on') data.Interests[0].enabled = null;
  else data.Interests[0].enabled = 'checked';

  if (fooddrink != 'on') data.Interests[1].enabled = null;
  else data.Interests[1].enabled = 'checked';

  if (news != 'on') data.Interests[2].enabled = null;
  else data.Interests[2].enabled = 'checked';

  if (music != 'on') data.Interests[3].enabled = null;
  else data.Interests[3].enabled = 'checked';

  if (healthfitness != 'on') data.Interests[4].enabled = null;
  else data.Interests[4].enabled = 'checked';

  if (technology != 'on') data.Interests[5].enabled = null;
  else data.Interests[5].enabled = 'checked';

  var json = JSON.stringify(data, null, 2);
  fs.writeFile('Interests.json', json);

  res.render('index', data);
};
