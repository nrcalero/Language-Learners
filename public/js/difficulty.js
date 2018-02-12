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
