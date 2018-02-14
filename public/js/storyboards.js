function init() {
  'use strict';
  return true;
}
var maxsize = 2;
var index = 0;

$(document).ready(function () {
  initializePage();
  var index = 1;
  var stories = getStoryData();
  var interests = getInterestData();
  console.log(interests.Interests.length);
  });
  




function initializePage() {
  var usedstories = makeUsedStories();
  var interest = document.getElementById('interests').value;
  $("#text").empty();
  $("#text").append('<p> <em><strong> Word list: </strong></em> </p>');
  if (interest == "sports") {
    $('.story p').text(usedstories.sports[++index % maxsize].body);
    $('#wordlist').text(usedstories.sports[index % maxsize].words);

    Object.keys(usedstories.sports[index % maxsize].words[0]).forEach(function(key) {
      $('#text').append('<p>' + key + ' : ' + usedstories.sports[index % maxsize].words[0][key] + '</p>');
    });

  }
  if (interest == "fooddrink") {
    $('.story p').text(usedstories.fooddrink[++index % maxsize].body);
    console.log(JSON.stringify(usedstories.fooddrink[index % maxsize].words[0]));
    Object.keys(usedstories.fooddrink[index % maxsize].words[0]).forEach(function(key) {
      $('#text').append('<p>' + key + ' : ' + usedstories.fooddrink[index % maxsize].words[0][key] + '</p>');
    });
  }
  if (interest == "news") {
    $('.story p').text(usedstories.news[++index % maxsize].body);
    $('#wordlist').text(usedstories.news[index % maxsize].words);
    Object.keys(usedstories.news[index % maxsize].words[0]).forEach(function(key) {
      $('#text').append('<p>' + key + ' : ' + usedstories.news[index % maxsize].words[0][key] + '</p>');
    });

  }
  if (interest == "music") {
    $('.story p').text(usedstories.music[++index % maxsize].body);
    $('#wordlist').text(usedstories.music[index % maxsize].words);
    Object.keys(usedstories.music[index % maxsize].words[0]).forEach(function(key) {
      $('#text').append('<p>' + key + ' : ' + usedstories.music[index % maxsize].words[0][key] + '</p>');
    });


  }
  if (interest == "healthfitness") {
    $('.story p').text(usedstories.healthfitness[++index % maxsize].body);
    $('#wordlist').text(usedstories.healthfitness[index % maxsize].words);
    Object.keys(usedstories.healthfitness[index % maxsize].words[0]).forEach(function(key) {
      $('#text').append('<p>' + key + ' : ' + usedstories.healthfitness[index % maxsize].words[0][key] + '</p>');
    });

  }
  if (interest == "technology") {
    $('.story p').text(usedstories.technology[++index % maxsize].body);
    $('#wordlist').text(usedstories.technology[index % maxsize].words);
    Object.keys(usedstories.technology[index % maxsize].words[0]).forEach(function(key) {
      $('#text').append('<p>' + key + ' : ' + usedstories.technology[index % maxsize].words[0][key] + '</p>');
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

