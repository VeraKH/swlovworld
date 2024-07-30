import { locations } from "./locations.js";

const map = L.map('map').setView(locations[0].latLng, 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

locations.forEach((location) => {
    L.marker(location.latLng).addTo(map).bindPopup(`<a href=${location.href}>${location.name}</a>`);
})