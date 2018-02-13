function init() {
  'use strict';
  return true;
}

$(document).ready(function () {
  initializePage();
  var index = 1;
  var stories = getStoryData();
  var interests = getInterestData();
  console.log(interests.Interests.length);




  $('#next').click(function () {
    console.log('Button clicked');
    event.preventDefault();q
    $('.story p').text('The story will change when the "Next Story" button is clicked.');
  });

  /* 'Word List' Listener */
  $('#words').click(function () {
    event.preventDefault();
    alert('Popup with words in the text will appear!');
  });
});

function initializePage() {
  console.log('Javascript connected!');
}

function changeInterest() {
  var interest = document.getElementById('interests').value;
  $('.story p').text('This story will be about ' + interest + '!');
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


