$(document).ready(function(){
  $('.slider').slick({
   arrows:false,
   autoplaySpeed: 700,
   slickPlay:true,
   autoplay:true,
  });
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

var img = new Image(100, 200);
img.src = '../img/5172.750x0.jpg';
console.log(img);