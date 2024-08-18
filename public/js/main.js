const socket = io();



if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      socket.emit("send-location", { latitude, longitude });
      console.log(typeof(latitude))
    },
    (error) => {
      console.error(error);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
}

navigator.permissions.query({ name: "geolocation" }).then((result) => {
    if (result.state === "granted") {
      // Permission granted, start watching position
      startGeolocation();
    } else if (result.state === "prompt") {
      // Request permission explicitly
      startGeolocation();
    } else {
      console.log("Geolocation permission denied.");
    }
  }); 
  
  function startGeolocation() {
    navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        socket.emit("send-location", { latitude, longitude });
      },
      (error) => {
        console.error(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }
  

const map = L.map("leafletmap").setView([0, 0], 10);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "OpenStreetMap",
  maxZoom: 21,
}).addTo(map);

const markers = {};

socket.on("recieve-location", (data) => {
  const { id, latitude, longitude } = data;
  map.setView([latitude, longitude], 18, {
    animate: true,
    pan: {
      duration: 1,
    },
    zoom: {
      duration: 1,
    },
  });
  const marker = L.marker([latitude, longitude]).addTo(map);
  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude]);
  } else {
    markers[id] = L.marker([latitude , longitude]).addTo(map);

  }
  console.log(markers);
});


socket.on("user-disconnect" , (id)=>{
    if(markers[id]){
        map.removeLayer(markers[id]);
        delete markers[id];
    }
})
