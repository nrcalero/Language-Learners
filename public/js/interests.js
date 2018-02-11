function init() {
  'use strict';
  return true;
}

$(document).ready(function () {
  initializePage();
  $('.switch :checkbox').on("change", function () {
    var something = $.getJSON("interestsdata", function () {
    console.log("Hip hip horray!");
    });

  });
});



function initializePage() {
  console.log('Javascript connected!');
}

function changeInterest() {
  var interest = document.getElementById('interests').value;
  $('.story p').text('This story will be about ' + interest + '!');
}

