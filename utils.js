export function calculateCenter(locations) {
    const latLngs = locations.map(function (location) {
        return L.latLng(...location.latLng);
    });
    const bounds = L.latLngBounds(latLngs);
    const center = bounds.getCenter();
    return center;
}