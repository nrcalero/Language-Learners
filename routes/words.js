var data = require('../stories.json');
var interests = require('../Interests.json');
var difficulty = require('../Difficulty.json');

/*
 * GET Words page.
 */
exports.view = function (req, res) {
  var words = getWords(data);
  res.render('words', words);
};

/*
 * Gets all the words from our JSON file, stories.json, if the corresponding
 * is enabled
 */
function getWords(data) {
  var arr = [];
  var diffs = setupDifficulty();

  for (var c in data.stories) {
    if (interests.Interests[c].enabled == 'checked') {
      for (var s in data.stories[c]) {
        for (var t in data.stories[c][s]) {
          switch (data.stories[c][s][t].difficulty) {
            case 'easy':
              if (diffs[0])
                addWords(data.stories[c][s][t].words[0], arr);
              break;
            case 'medium':
              if (diffs[1])
                addWords(data.stories[c][s][t].words[0], arr);
              break;
            case 'hard':
              if (diffs[2])
                addWords(data.stories[c][s][t].words[0], arr);
              break;
          }
        }
      }
    }
  }

  arr.sort(compareWord);
  var obj = {};
  obj.words = arr;
  return obj;
}

// I borrowed some of your code, Hasan
function setupDifficulty() {
  var difficulties = [];

  difficulties[0] = difficulty.Difficulty[0].enabled == 'checked';
  difficulties[1] = difficulty.Difficulty[1].enabled == 'checked';
  difficulties[2] = difficulty.Difficulty[2].enabled == 'checked';

  return difficulties;
}

function addWords(list, arr) {
  for (var w in list) {
    var vocabWord = {
      word: w,
      meaning: list[w],
    };
    arr.push(vocabWord);
  }
}

function compareWord(x, y) {
  var word1 = x.word.toLowerCase();
  var word2 = y.word.toLowerCase();

  var result = 0;

  if (word1 > word2) {
    result = 1;
  } else if (word1 < word2) {
    result = -1;
  }

  return result;
}
