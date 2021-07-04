import {
  simulate,
  rand,
  wait,
  zoomIn,
  panTo,
  randomCity,
} from "google-maps-autopilot";

const init = async () => {
  const map = new google.maps.Map(document.getElementById("root"), {
    center: new google.maps.LatLng(0, 0),
    zoom: 2,
    mapTypeControl: false,
    panControl: false,
    zoomControl: true,
    streetViewControl: false,
    scaleControl: false,
    styles: [
      {
        elementType: "geometry",
        stylers: [{ visibility: "off" }],
      },
    ],
  });

  if (window.location.search.includes("autopilot")) {
    await wait(rand(1000, 5000));
    await simulate(map);
  }

  if (window.location.search.includes("zoom")) {
    const zoom = async () => {
      panTo(map, randomCity());
      await zoomIn(map, 200, 200);
      await zoom();
    };

    zoom();
  }
};

google.maps.event.addDomListener(window, "load", init);
