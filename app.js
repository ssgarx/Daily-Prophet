// MAIN NAVBAR
$(document).ready(function () {

  // NAV SECTION
  var w = $(window).width();
  var w1 = w + 17;
  console.log("zz"+ w1);
  
  if (w1 < 1230) {
    var navPoints2 = $("#navbar2").offset().top;
    $(window).scroll(function () {
      stickyNav2();
    });
  } else {
    console.log("wNot < 1230");
    var navPoints = $("#navbar").offset().top;
    $(window).scroll(function () {
      stickyNav();
    });
  }
  
  $(window).resize(function(){
    var x = $(window).width();
    var x1 = x + 17;
    console.log("yy"+ x1);
    if (x1 < 1230) {
      var navPoints2 = $("#navbar2").offset().top;
      $(window).scroll(function () {
        stickyNav2();
      });
    } else {
      var navPoints = $("#navbar").offset().top;
      console.log("xNot < 1230");
      $(window).scroll(function () {
        stickyNav();
      });
    }

  });

    function stickyNav() {
      
      var pagePoints = $(window).scrollTop();
      if (pagePoints >= navPoints) {
        $("#navbar").addClass("sticky")
      } else {
        $("#navbar").removeClass("sticky")
      }
    }
    function stickyNav2() {
      
      var pagePoints2 = $(window).scrollTop();
      if (pagePoints2 >= navPoints2) {
        $("#navbar2").addClass("sticky2")
      } else {
        $("#navbar2").removeClass("sticky2")
      }
    }
    // NAV SECTION ENDS

    // DATE SECTION
    var options = { weekday: 'long'};
    var today = new Date();

    var fullDate = today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear();
    var justDay =today.toLocaleDateString("en-US", options);
    $(".fday").html(fullDate);
    $(".jday").html(justDay);
    // DATE SECTION ENDS
});

// SIDE NAV
function openSideNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeSideNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// *****SIDE NAV ENDS*****
