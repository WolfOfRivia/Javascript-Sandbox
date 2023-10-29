// Getting the user's current position
function curSuccess(pos) {
  console.log(pos);
  const coords = pos.coords;
  console.log(`Latitude: ${coords.latitude}, Longitude: ${coords.longitude}`);
  console.log(`Within: ${coords.accuracy} meters of Latitude: ${coords.latitude}, Longitude: ${coords.longitude}`);
}

function curError(error) {
  console.log(`Error Code: ${error.code} - ${error.message}`);
}

const curOptions = {
  enableHighAccuracy: true, // Use GPS is available
  timeout: 5000, // Time to wait to stop trying for locations
  maximumAge: 0 // Do not use cached position
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

// Watch user's position
const target = {
  latitude: 41.312483,
  longitude: -83.12395 // lol just outside Fremont Ohio
}

// Watch success runs when the user changes location it would be watching some kind of target
function watchSuccess(pos) {
  const coords = pos.coords;
  console.log(coords);
  
  if(target.latitude === coords.latitude && target.longitude === coords.longitude) {
    console.log('You have reached your destination!');
    navigator.geolocation.clearWatch(id);
  }
}

function watchError(error) {
  console.log(`Error Code: ${error.code} - ${error.message}`);
}

const watchOptions = {
  enableHighAccuracy: true, // Use GPS is available
  timeout: 5000, // Time to wait to stop trying for locations
  maximumAge: 0 // Do not use cached position
};

// Watch position returns an ID you can use
const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);