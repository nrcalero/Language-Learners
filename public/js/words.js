function init() {
  'use strict';
  return true;
}

function changeWords() {
  var input = document.getElementById('wordSearch').value.toUpperCase();
  var words = document.getElementById('words').getElementsByTagName('li');

  for (i = 0; i < words.length; i++) {
    var content = words[i].textContent.toUpperCase();

    if (content.indexOf(input) > -1) {
      words[i].style.display = '';
    } else {
      words[i].style.display = 'none';
    }
  }
}
