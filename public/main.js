function side_open() {
  document.getElementById("center").style.marginRight = "25%";
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("mySidebar").style.display = "block";
}
function side_close() {
  document.getElementById("center").style.marginRight = "0%";
  document.getElementById("mySidebar").style.display = "none";
}
$(document).ready(() => {
      function resizeSideBars() {
        $(".col-md-2, .sidenav").height($(window).height());
        $("#main").height($(window).height());
      }

      //resizeSideBars();
    });