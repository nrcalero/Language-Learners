function init() {
  'use strict';
  return true;
}

$(document).ready(function () {
  initializePage();
  $('.switch :checkbox').on("change", function () {
    alert("The checkbox with the ID " + this.id + " changed.");
    var object = JSON.parse('Interests.json');
  });
});



function initializePage() {
  console.log('Javascript connected!');
}

function changeInterest() {
  var interest = document.getElementById('interests').value;
  $('.story p').text('This story will be about ' + interest + '!');
}
