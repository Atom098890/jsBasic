const positionLat = 6;
const positionLong = 10;
const addressLat = 8;
const addressLong = 16;

const destination = Math.sqrt(((addressLat - positionLat) ** 2) + ((addressLong - positionLong) ** 2))
console.log(destination);