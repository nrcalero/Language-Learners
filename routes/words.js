var data = require('../stories.json');

/*
 * GET Words page.
 */

exports.view = function (req, res) {
  var words = getStories(data);
  console.log(words);
  res.render('words', words);
};

function getStories(data) {
  var arr = [];

  for (var c in data.stories) {
    for (var s in data.stories[c]) {
      for (var t in data.stories[c][s]) {
        for (var w in data.stories[c][s][t].words[0]) {
          var vocabWord = {
            word: w,
            meaning: data.stories[c][s][t].words[0][w],
          };
          arr.push(vocabWord);
        }
      }
    }
  }

  arr.sort(compareWord);
  var obj = {};
  obj.words = arr;
  return obj;
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
