function init() {
  'use strict';
  return true;
}

$(document).ready(function () {
  initializePage();

  /* 'Next Story' listener */
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
