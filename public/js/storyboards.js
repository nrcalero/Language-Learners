
function init() {
  'use strict';
  return true;
}

var index = 0;

$(document).ready(function () {
  initializePage();
  var index = 1;
});

function initializePage() {
  event.preventDefault();
  var usedstories = makeUsedStories();
  var difficulties = setupDifficulty();
  ++index;

  var interest = document.getElementById('interests').value;
  $('#text').empty();
  $('#text').append('<p><em><strong>Word list: </strong></em></p>');

  if (interest == 'sports') {
    while (true) {
      if (usedstories.sports[index % usedstories.sports.length].difficulty == "easy" && difficulties[0] == true) break;
      if (usedstories.sports[index % usedstories.sports.length].difficulty == "medium" && difficulties[1] == true) break;
      if (usedstories.sports[index % usedstories.sports.length].difficulty == "hard" && difficulties[2] == true) break;
      ++index;
    }
    $('.story p').text(usedstories.sports[index % usedstories.sports.length].body);
    usedstories.sports[index % usedstories.sports.length].read = "true";
    console.log(usedstories.sports[index % usedstories.sports.length]);
    $('#titlestrong').text(usedstories.sports[index % usedstories.sports.length].title);
    Object.keys(usedstories.sports[index % usedstories.sports.length].words[0]).forEach(function (key) {
      $('#text').append('<p>' + key + ' : ' + usedstories.sports[index % usedstories.sports.length].words[0][key] + '</p>');
    });
  }

  if (interest == 'fooddrink') {
    while (true) {
      if (usedstories.fooddrink[index % usedstories.fooddrink.length].difficulty == "easy" && difficulties[0] == true) break;
      if (usedstories.fooddrink[index % usedstories.fooddrink.length].difficulty == "medium" && difficulties[1] == true) break;
      if (usedstories.fooddrink[index % usedstories.fooddrink.length].difficulty == "hard" && difficulties[2] == true) break;
      ++index;
    }
    $('.story p').text(usedstories.fooddrink[index % usedstories.fooddrink.length].body);
    $('#titlestrong').text(usedstories.fooddrink[index % usedstories.fooddrink.length].title);
    Object.keys(usedstories.fooddrink[index % usedstories.fooddrink.length].words[0]).forEach(function (key) {
      $('#text').append('<p>' + key + ' : ' + usedstories.fooddrink[index % usedstories.fooddrink.length].words[0][key] + '</p>');
    });
  }

  if (interest == 'news') {
    while (true) {
      if (usedstories.news[index % usedstories.news.length].difficulty == "easy" && difficulties[0] == true) break;
      if (usedstories.news[index % usedstories.news.length].difficulty == "medium" && difficulties[1] == true) break;
      if (usedstories.news[index % usedstories.news.length].difficulty == "hard" && difficulties[2] == true) break;
      ++index;
    }
    $('.story p').text(usedstories.news[index % usedstories.news.length].body);
    $('#titlestrong').text(usedstories.news[index % usedstories.news.length].title);
    Object.keys(usedstories.news[index % usedstories.news.length].words[0]).forEach(function (key) {
      $('#text').append('<p>' + key + ' : ' + usedstories.news[index % usedstories.news.length].words[0][key] + '</p>');
    });
  }

  if (interest == 'music') {
    while (true) {
      if (usedstories.music[index % usedstories.music.length].difficulty == "easy" && difficulties[0] == true) break;
      if (usedstories.music[index % usedstories.music.length].difficulty == "medium" && difficulties[1] == true) break;
      if (usedstories.music[index % usedstories.music.length].difficulty == "hard" && difficulties[2] == true) break;
      ++index;
    }
    $('.story p').text(usedstories.music[index % usedstories.music.length].body);
    $('#titlestrong').text(usedstories.music[index % usedstories.music.length].title);
    Object.keys(usedstories.music[index % usedstories.music.length].words[0]).forEach(function (key) {
      $('#text').append('<p>' + key + ' : ' + usedstories.music[index % usedstories.music.length].words[0][key] + '</p>');
    });
  }

  if (interest == 'healthfitness') {
    while (true) {
      if (usedstories.healthfitness[index % usedstories.healthfitness.length].difficulty == "easy" && difficulties[0] == true) break;
      if (usedstories.healthfitness[index % usedstories.healthfitness.length].difficulty == "medium" && difficulties[1] == true) break;
      if (usedstories.healthfitness[index % usedstories.healthfitness.length].difficulty == "hard" && difficulties[2] == true) break;
      ++index;
    }
    $('.story p').text(usedstories.healthfitness[index % usedstories.healthfitness.length].body);
    $('#titlestrong').text(usedstories.healthfitness[index % usedstories.healthfitness.length].title);
    Object.keys(usedstories.healthfitness[index % usedstories.healthfitness.length].words[0]).forEach(function (key) {
      $('#text').append('<p>' + key + ' : ' + usedstories.healthfitness[index % usedstories.healthfitness.length].words[0][key] + '</p>');
    });
  }

  if (interest == 'technology') {
    while (true) {
      if (usedstories.technology[index % usedstories.technology.length].difficulty == "easy" && difficulties[0] == true) break;
      if (usedstories.technology[index % usedstories.technology.length].difficulty == "medium" && difficulties[1] == true) break;
      if (usedstories.technology[index % usedstories.technology.length].difficulty == "hard" && difficulties[2] == true) break;
      ++index;
    }
    $('.story p').text(usedstories.technology[index % usedstories.technology.length].body);
    $('#titlestrong').text(usedstories.technology[index % usedstories.technology.length].title);
    Object.keys(usedstories.technology[index % usedstories.technology.length].words[0]).forEach(function(key) {
      $('#text').append('<p>' + key + ' : ' + usedstories.technology[index % usedstories.technology.length].words[0][key] + '</p>');
    });
  }
}

function makeUsedStories() {
  var usedstories = {};
  var stories = getStoryData();
  var interests = getInterestData();

  for (var i = 0; i < interests.Interests.length; ++i) {
    if (interests.Interests[i].enabled == 'checked') {
      $.extend(usedstories, stories.stories[i]);
    }
  }

  return usedstories;
}

function getStoryData() {

  var result = null;
  $.ajax({
    async: false,
    url: 'storydata',
    dataType: 'json',
    success: function (data) {
      result = data;
    },
  });
  return result;
}

function getInterestData() {
  var result = null;
  $.ajax({
    async: false,
    url: 'interestsdata',
    dataType: 'json',
    success: function (data) {
      result = data;
    },
  });
  return result;
}

function getDifficultyData() {
  var result = null;
  $.ajax({
    async: false,
    url: 'difficultydata',
    dataType: 'json',
    success: function (data) {
      result = data;
    },
  });
  return result;
}

function on() {
  event.preventDefault();
  //document.getElementById('overlay').style.display = 'block';
  $('#overlay').fadeIn();
}

function off() {
  $('#overlay').fadeOut();
}

function setupDifficulty() {
  var difficulty = getDifficultyData();
  var difficulties = [];
  if (difficulty.Difficulty[0].enabled == "checked") difficulties[0] = true;
  else difficulties[0] = false;
  if (difficulty.Difficulty[1].enabled == "checked") difficulties[1] = true;
  else difficulties[1] = false;
  if (difficulty.Difficulty[2].enabled == "checked") difficulties[2] = true;
  else difficulties[2] = false;
  return difficulties;
}
