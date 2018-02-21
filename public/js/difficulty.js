function init() {
  'use strict';
  return true;
}

$(document).ready(function () {
  $('.modal').modal();
  $('.switch #sports:checkbox').on("change", function () {
    var data = $.getJSON("interestsdata", function (mydata) {
          if (mydata.Interests[0].enabled == null) {
            mydata.Interests[0].enabled = "checked";
          }
          else {
            mydata.Interests[0].enabled = null;
          }
    });
  });
});
