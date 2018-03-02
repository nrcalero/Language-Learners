function init() {
  'use strict';
  return true;
}

function changeWords() {
  var input = document.getElementById('wordSearch').value.toUpperCase();
  var words = document.getElementById('words').getElementsByTagName('li');

  for (var w in words) {
    var content = words[w].textContent.toUpperCase();

    if (content.indexOf(input) > -1) {
      words[w].style.display = '';
    } else {
      words[w].style.display = 'none';
    }
  }
}
