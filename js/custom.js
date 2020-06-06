
function myFunction() {
    var x = document.getElementById("mynavigation");
    if (x.className === "navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }
  }
  $(document).scroll(function() {
    var scroll = $(window).scrollTop();
   $(".image").css("background-position", "0%" + (scroll / -0.5) + "px");
  });