export const FROM_THERE = 'FROM_THERE'

export const fromThere = (location) => ({
    type: FROM_THERE,
    latitude: location.latitude,
    longitude: location.longitude,
})