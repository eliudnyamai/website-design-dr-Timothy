/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("mybottomnav");
    if (x.className === "bottomnav") {
      x.className += " responsive";
    } else {
      x.className = "bottomnav";
    }
  }

function topNavFunction(){
  var x = document.getElementById("mytopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

