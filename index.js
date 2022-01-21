// index.js
// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
});

module.exports = printPassTimes;
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('97.108.158.10', (error, data) => {
//   if (error) {
//     console.log("The coordinates by IP could not be found.", error);
//     return;
//   }
//   console.log("It worked! Coordinates: ", data);
// });

// const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };
// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("The fly over times could not be found.", error);
//     return;
//   }
//   console.log('It worked! Return flyover times:', passTimes);
// });
