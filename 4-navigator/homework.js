let positionLat = 6;
let positionLong = 10;
let addressLat = 8;
let addressLong = 16;

let destination = Math.sqrt(((addressLat - positionLat) ** 2) + ((addressLong - positionLong) ** 2))
console.log(destination);