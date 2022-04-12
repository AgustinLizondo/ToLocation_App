export const GO_THERE = 'GO_THERE';

export const goThere = (location) => ({
    type: GO_THERE,
    latitude: location.latitude,
    longitude: location.longitude,
})