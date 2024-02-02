// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// when hamburger menu is clicked
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click the outside area of the sidebar to make it disappear
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// google map  custom
google.maps.event.addDomListener(window, "load", function () {
  var map = new google.maps.Map(document.getElementById("map-canvas"), {
    center: new google.maps.LatLng(52.54215, -1.37335),
    zoom: 14,
  });
  //add a marker
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(52.542151, -1.373351),
    map: map,
    title: "Hello World!",
    View_on_Google_Maps_link: "https://www.google.com/maps/place/AT+Home+Furniture/@52.541864,-1.373233,16z/data=!4m2!3m1!1s0x0:0x733a43420fa646be?hl=en-GB",
  });

  //attach a click event to the marker to display the info window.
  google.maps.event.addListener(marker, "click", function () {
    //create a info window to show when a maker is clicked
    var infowindow = new google.maps.InfoWindow({
      content: "<div>Share link: " + this.View_on_Google_Maps_link + ".</div>",
    });
    infowindow.open(map, this);
  });
});
