
function myFunction() {
    var x = document.getElementById("mybottomnav");
    if (x.className === "bottomnav") {
      x.className += " responsive";
    } else {
      x.className = "bottomnav";
    }
  }
  $(document).scroll(function() {
    var scroll = $(window).scrollTop();
   $(".image").css("background-position", "0%" + (scroll / -0.5) + "px");
  });