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

// // Initialize and add the map
// function initMap() {
//   // The location of Geeksforgeeks office
//   const cafe_office = {
//     lat: -6.523193009333955,
//     lng: 110.77535284774221,
//   };

//   // Create the map, centered at gfg_office
//   const map = new google.maps.Map(document.getElementById("map"), {
//     // Set the zoom of the map
//     zoom: 17.56,
//     center: cafe_office,
//   });
// }
