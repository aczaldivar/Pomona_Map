var map = L.map('map').setView([34.0551, -117.7500], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([34.05,-117.74 ]).addTo(map);


var circle = L.circle([34.05,-117.73], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon([
    [34.056, -117.82],
    [34.056, -117.75],
    [34.08, -117.77]
]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.").openPopup;
polygon.bindPopup("I am a polygon.").openPopup;

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
    //map.on('click',onMapClick)
// Get the select element
//const selectElement = document.getElementById('Element');

// Get the selected value
//const selectedValue = selectElement.value;

// Set the selected value
//selectElement.value = "coffee";

 //Add an event listener to detect when the selection changes
//select.addEventListener("change", function() {
// console.log("Selected Business:", selectElement.value);
//});



// Create a new Leaflet map instance
const mymap = L.map('mapid').setView([0, 0], 13);


// Get the user's location
navigator.geolocation.getCurrentPosition(function(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  // Create a marker for the user's location
  const marker = L.marker([lat, lon]).addTo(mymap);

  // Center the map on the user's location
  mymap.setView([lat, lon], 13);


// Add a popup to the marker with the user's coordinates
marker.bindPopup(`Latitude: ${lat}<br>Longitude: ${lon}`).openPopup();
});



// foursquare api key: fsq3b1lnT0XeT1o3QgyA4lYp36R1sdoRew7voHZJVEe5pOI=
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'fsq3b1lnT0XeT1o3QgyA4lYp36R1sdoRew7voHZJVEe5pOI='
    }
  };
  // Create a new Leaflet map instance
const mapz = L.map('mapid').setView([40.7128, -74.0060], 13);


const optionz= {
    method: 'POST',
    headers: {
    accept: 'application/json',
    Authorization: 'fsq3b1lnT0XeT1o3QgyA4lYp36R1sdoRew7voHZJVEe5pOI='
  }};


fetch('https://api.foursquare.com/v3/place/select', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

    const endpoint = 'https://api.foursquare.com/v3/venues/search';
    const params = {
      client_id: 'TKIHSF2R5JDHJLU1KQC512UXS3PHSBGR40CN5TEQFUKPIH0L',
      client_secret: 'BW3TSZ1G5TLUXTLZ54I104SWLYZCTONZ0HGMIWPD1KE0NCLE',
      ll: '34.089, -117.8363', // Pomona Coordinates
      v: '20220325', // Foursquare API version
    };
    
    // Send a request to the Foursquare API
    //fetch(endpoint + '?' + new URLSearchParams(params))
    //  .then(response => response.json())
    //  .then(data => {
    //    // Loop through the results and create markers on the map
    //    data.response.venues.forEach(venue => {
    //      const marker = L.marker([venue.location.lat, venue.location.lng]).addTo(mapz);
    //      marker.bindPopup(venue.name);
     //   });
     // })
    //  .catch(error => console.error(error));
    