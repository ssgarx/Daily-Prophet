// SIDE NAV
function openSideNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeSideNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// *****SIDE NAV ENDS*****

//UPON SCROLL TRIGGER FUNCTION
window.onscroll = function () {
  addSticky();
};

//GET NAV1
var nav1 = document.getElementById("navbar");
var nav2 = document.getElementById("navbar2");

//GET NAV1 & NAV2 OFFSET
// var n1o = nav1.offsetTop; //124
// var n2o = nav2.offsetTop; //66

// console.log("n1o: "+n1o+" , "+"n2o: "+n2o);

//APPLY STICKY
function addSticky() {
  var ss = window.innerWidth;
  if (ss >= 1230) {
    if (window.pageYOffset >= 124) {
      nav1.classList.add("sticky");
    } else {
      nav1.classList.remove("sticky");
    }
  } else {
    if (window.pageYOffset >= 66) {
      nav2.classList.add("sticky2");
    } else {
      nav2.classList.remove("sticky2");
    }
  }
}
