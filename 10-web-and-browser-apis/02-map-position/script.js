// Creating a map using the leaflet Library

// Initiating a map with the leaflet object (L) using the .map() method (NOT to be confused with array.map())

// .setView() accepts Latitude and Logitude as well as the zoom level
const map = L.map('map').setView([0, 0], 2);

// Adding title
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adding map marker
const marker = L.marker([0, 0]).addTo(map);

// Get geolocation
navigator.geolocation.getCurrentPosition(function(pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;

  // update map marker
  marker.setLatLng([lat, lng]).update();
  // update map view
  map.setView([lat, lng], 14); // The higher the zoom number the more zoomed in it will be 18 is the highest
  // update popup
  marker.bindPopup('<strong>Hello World</strong><br> This is my location');
})