function init() {
  'use strict';
  return true;
}

$(document).ready(function () {
  initializePage();
<<<<<<< HEAD
  var interests = $.getJSON("interestsdata", function(interests) {});
  var stories = $.getJSON("storydata", function(mydata) {
      alert(mydata);
  })
=======
  var index = 1;
  var stories = getStoryData();
  var interests = getInterestData();
  console.log(interests.Interests.length);



>>>>>>> 818b25cacb33a4a6713224f8f1c10ed12ee0e89f

  $('#next').click(function () {
    console.log('Button clicked');
    event.preventDefault();
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


