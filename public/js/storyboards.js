function init() {
  'use strict';
  return true;
}
var index = 0;

$(document).ready(function () {
  initializePage();
  var index = 1;
  var stories = getStoryData();
  var interests = getInterestData();
  console.log(interests.Interests.length);
  });
  





function initializePage() {
  event.preventDefault();
  var usedstories = makeUsedStories();
  var interest = document.getElementById('interests').value;
  $("#text").empty();
  $("#text").append('<p> <em><strong> Word list: </strong></em> </p>');
  if (interest == "sports") {
    $('.story p').text(usedstories.sports[++index % usedstories.sports.length].body);
    $('#titlestrong').text(usedstories.sports[index % usedstories.sports.length].title);
    Object.keys(usedstories.sports[index % usedstories.sports.length].words[0]).forEach(function(key) {
      $('#text').append('<p>' + key + ' : ' + usedstories.sports[index % usedstories.sports.length].words[0][key] + '</p>');
    });

  }
  if (interest == "fooddrink") {
    $('.story p').text(usedstories.fooddrink[++index % usedstories.fooddrink.length].body);
    $('#titlestrong').text(usedstories.fooddrink[index % usedstories.fooddrink.length].title);
    Object.keys(usedstories.fooddrink[index % usedstories.fooddrink.length].words[0]).forEach(function(key) {
      $('#text').append('<p>' + key + ' : ' + usedstories.fooddrink[index % usedstories.fooddrink.length].words[0][key] + '</p>');
    });
  }
  if (interest == "news") {
    $('.story p').text(usedstories.news[++index % usedstories.news.length].body);
    $('#titlestrong').text(usedstories.news[index % usedstories.news.length].title);
    Object.keys(usedstories.news[index % usedstories.news.length].words[0]).forEach(function(key) {
      $('#text').append('<p>' + key + ' : ' + usedstories.news[index % usedstories.news.length].words[0][key] + '</p>');
    });

  }
  if (interest == "music") {
    $('.story p').text(usedstories.music[++index % usedstories.music.length].body);
    $('#titlestrong').text(usedstories.music[index % usedstories.music.length].title);

    Object.keys(usedstories.music[index % usedstories.music.length].words[0]).forEach(function(key) {
      $('#text').append('<p>' + key + ' : ' + usedstories.music[index % usedstories.music.length].words[0][key] + '</p>');
    });


  }
  if (interest == "healthfitness") {
    $('.story p').text(usedstories.healthfitness[++index % usedstories.healthfitness.length].body);
    $('#titlestrong').text(usedstories.healthfitness[index % usedstories.healthfitness.length].title);

    Object.keys(usedstories.healthfitness[index % usedstories.healthfitness.length].words[0]).forEach(function(key) {
      $('#text').append('<p>' + key + ' : ' + usedstories.healthfitness[index % usedstories.healthfitness.length].words[0][key] + '</p>');
    });

  }
  if (interest == "technology") {
    $('.story p').text(usedstories.technology[++index % usedstories.technology.length].body);
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
    if (interests.Interests[i].enabled == "checked") {
      $.extend(usedstories, stories.stories[i]);
    }
  }
  return usedstories;

}


function getStoryData() {

  var result = null;
  $.ajax({
    async:false,
    url: "storydata",
    dataType: "json",
    success: function(data) {
      result = data;
    }});
  return result;
}

function getInterestData() {
  var result = null;
  $.ajax({
    async:false,
    url: "interestsdata",
    dataType: "json",
    success: function(data) {
      result = data;
    }});
  return result;
}

function on() {
  event.preventDefault();
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

