function init() {
  'use strict';
  return true;
}
var maxsize = 2;
var index = 0;

$(document).ready(function () {
  initializePage();
  $('.story p').text()
  $('#next').click(function() {
    event.preventDefault();
    initializePage();
  });
  

  /* 'Word List' Listener */
  $('#words').click(function () {
    event.preventDefault();
    alert('Popup with words in the text will appear!');


  });
});



function initializePage() {
  var usedstories = makeUsedStories();
  var interest = document.getElementById('interests').value;
  console.log(index);
  if (interest == "sports") {
    $('.story p').text(usedstories.sports[++index % maxsize].body);
  }
  if (interest == "fooddrink") {
    $('.story p').text(usedstories.fooddrink[++index % maxsize].body);
  }
  if (interest == "news") {
    $('.story p').text(usedstories.news[++index % maxsize].body);
  }
  if (interest == "music") {
    $('.story p').text(usedstories.music[++index % maxsize].body);
  }
  if (interest == "healthfitness") {
    $('.story p').text(usedstories.healthfitness[++index % maxsize].body);
  }
  if (interest == "technology") {
    $('.story p').text(usedstories.technology[++index % maxsize].body);
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


