
function init() {
  'use strict';
  return true;
}

var index = 0;
var initial = 0;

$(document).ready(function () {
  initial = new Date().getTime();
  $('.tooltipped').tooltip({delay:0});
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
  $('.story').scrollTop(0);
  if (interest == 'sports') {
    while (true) {
      if (usedstories.sports[index % usedstories.sports.length].difficulty == "easy" && difficulties[0] == true) break;
      if (usedstories.sports[index % usedstories.sports.length].difficulty == "medium" && difficulties[1] == true) break;
      if (usedstories.sports[index % usedstories.sports.length].difficulty == "hard" && difficulties[2] == true) break;
      ++index;
    }
    $('.story p').html(usedstories.sports[index % usedstories.sports.length].Altbody);
    usedstories.sports[index % usedstories.sports.length].read = "true";
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
    $('.story p').html(usedstories.fooddrink[index % usedstories.fooddrink.length].Altbody);
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
    $('.story p').html(usedstories.news[index % usedstories.news.length].Altbody);
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
    $('.story p').html(usedstories.music[index % usedstories.music.length].Altbody);
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
    $('.story p').html(usedstories.healthfitness[index % usedstories.healthfitness.length].Altbody);
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
    $('.story p').html(usedstories.technology[index % usedstories.technology.length].Altbody);
    $('#titlestrong').text(usedstories.technology[index % usedstories.technology.length].title);
    Object.keys(usedstories.technology[index % usedstories.technology.length].words[0]).forEach(function(key) {
      $('#text').append('<p>' + key + ' : ' + usedstories.technology[index % usedstories.technology.length].words[0][key] + '</p>');
    });
  }
    $('.tooltipped').tooltip({delay:0});

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


function analyticsFunc () {
  ga('send','event','wordlist','click');
}

function clickNext() {
  /* var final = new Date().getTime();
  var time = (final - initial);
  console.log((final - initial));
  ga('send','timing',{ 
    'timingCategory' : 'Experiment B',
    'timingVar' : 'read',
    'timingValue' : time
  });
  ga('send','event','next','click');

  initial = new Date().getTime(); */
  initializePage();
}
