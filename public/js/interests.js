function init() {
  'use strict';
  return true;
}

$(document).ready(function () {
  initializePage();
  $('.switch #sports:checkbox').on("change", function () {
    var data = $.getJSON("interestsdata", function (mydata) {
          console.log(mydata.Interests[0]);
          if (mydata.Interests[0].enabled == null) {
            mydata.Interests[0].enabled = "checked";
          }
          else {
                        console.log(JSON.stringify(mydata.Interests[0]));

            mydata.Interests[0].enabled = null;
            console.log(JSON.stringify(mydata.Interests[0]));
          }

    });
  });

    $('.switch #fooddrink:checkbox').on("change", function () {
    var data = $.getJSON("interestsdata", function (mydata) {
          console.log(mydata.Interests[1]);

    });
  });

      $('.switch #news:checkbox').on("change", function () {
    var data = $.getJSON("interestsdata", function (mydata) {
          console.log(mydata.Interests[2]);

    });
  });

        $('.switch #music:checkbox').on("change", function () {
    var data = $.getJSON("interestsdata", function (mydata) {
          console.log(mydata.Interests[3]);

    });
  });

          $('.switch #healthfitness:checkbox').on("change", function () {
    var data = $.getJSON("interestsdata", function (mydata) {
          console.log(mydata.Interests[4]);

    });
  });

            $('.switch #technology:checkbox').on("change", function () {
    var data = $.getJSON("interestsdata", function (mydata) {
          console.log(mydata.Interests[5]);

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

