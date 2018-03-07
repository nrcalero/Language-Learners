function init() {
  'use strict';
  return true;
}

$(document).ready(function () {
  initializePage();
  $('.switch #sports:checkbox').on('change', function () {
    var data = $.getJSON('interestsdata', function (mydata) {
      if (mydata.Interests[0].enabled == null) {
        mydata.Interests[0].enabled = 'checked';
      } else {
        mydata.Interests[0].enabled = null;
      }
    });
  });

  $('.switch #fooddrink:checkbox').on('change', function () {
    var data = $.getJSON('interestsdata', function (mydata) {
      console.log(mydata.Interests[1]);
    });
  });

  $('.switch #news:checkbox').on('change', function () {
    var data = $.getJSON('interestsdata', function (mydata) {
      console.log(mydata.Interests[2]);
    });
  });

  $('.switch #music:checkbox').on('change', function () {
    var data = $.getJSON('interestsdata', function (mydata) {
    });
  });

  $('.switch #healthfitness:checkbox').on('change', function () {
    var data = $.getJSON('interestsdata', function (mydata) {
    });
  });

  $('.switch #technology:checkbox').on('change', function () {
    var data = $.getJSON('interestsdata', function (mydata) {
    });
  });
});

function initializePage() {
}

function changeInterest() {
  var interest = document.getElementById('interests').value;
  $('.story p').text('This story will be about ' + interest + '!');
}
