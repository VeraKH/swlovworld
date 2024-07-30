const locations = [
    {
        name: "Bratislava",
        href: 'locations/bratislava.html',
        latLng: [48.148598, 17.107748],
    },
    {
        name: "Viena",
        href: 'locations/vienna.html',
        latLng: [48.210033, 16.363449]
    },
    {
        name: 'Erlaufsee',
        href: 'locations/erlaufsee.html',
        latLng: [47.791809, 15.273135]
    }
];

const map = L.map('map').setView(locations[0].latLng, 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

locations.forEach((location) => {
    L.marker(location.latLng).addTo(map).bindPopup(`<a href=${location.href}>${location.name}</a>`);
})